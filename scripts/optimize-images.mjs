import fs from "node:fs/promises";
import path from "node:path";

const targets = process.argv.slice(2);

async function main() {
  let sharp;

  try {
    ({ default: sharp } = await import("sharp"));
  } catch {
    throw new Error(
      'The "sharp" package is required for image optimization. Install it with: npm install -D sharp'
    );
  }

  if (targets.length === 0) {
    throw new Error(
      "No image paths provided. Example: npm run media:optimize -- public/images/portfolio/evenementiel/fashion-week-2026/fashion-week-2026-01.png"
    );
  }

  for (const target of targets) {
    const fullPath = path.resolve(target);
    const srcStat = await fs.stat(fullPath);
    const parsed = path.parse(fullPath);
    const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);

    await sharp(fullPath)
      .rotate()
      .resize({ width: 1800, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toFile(outputPath);

    const outStat = await fs.stat(outputPath);
    const saved = srcStat.size - outStat.size;

    // eslint-disable-next-line no-console
    console.log(
      `${path.relative(process.cwd(), fullPath)} -> ${path.relative(process.cwd(), outputPath)} (${Math.round(saved / 1024)} KB saved)`
    );
  }
}

await main();
