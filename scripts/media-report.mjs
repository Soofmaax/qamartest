import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve("public");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function formatMb(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function listFilesRecursive(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFilesRecursive(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const files = await listFilesRecursive(ROOT);
  const ranked = [];

  for (const fullPath of files) {
    if (fullPath.includes(`${path.sep}raw-import${path.sep}`)) continue;

    const ext = path.extname(fullPath).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(ext)) continue;

    const stat = await fs.stat(fullPath);
    ranked.push({
      relPath: path.relative(process.cwd(), fullPath),
      size: stat.size,
    });
  }

  ranked.sort((a, b) => b.size - a.size);

  for (const file of ranked.slice(0, 40)) {
    // eslint-disable-next-line no-console
    console.log(`${formatMb(file.size)}  ${file.relPath}`);
  }
}

await main();
