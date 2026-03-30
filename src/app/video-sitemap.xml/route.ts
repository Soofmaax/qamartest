import { SITE_URL } from "@/lib/seo";
import {
  SITE_VIDEOS,
  youTubeThumbnailUrl,
  youTubeWatchUrl,
  type YouTubeVideo,
} from "@/lib/videos";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderVideoEntry(video: YouTubeVideo) {
  const pageUrl = `${SITE_URL}${video.pagePath}`;
  const title = escapeXml(video.title);
  const description = escapeXml(video.description ?? video.title);
  const contentUrl = escapeXml(youTubeWatchUrl(video.youtubeId));
  const thumbUrl = escapeXml(video.thumbnailUrl ?? youTubeThumbnailUrl(video.youtubeId));

  const uploadDate = video.uploadDate ? `<video:publication_date>${escapeXml(video.uploadDate)}</video:publication_date>` : "";
  const duration = video.duration ? `<video:duration>${escapeXml(video.duration)}</video:duration>` : "";

  return `
  <url>
    <loc>${escapeXml(pageUrl)}</loc>
    <video:video>
      <video:title>${title}</video:title>
      <video:description>${description}</video:description>
      <video:thumbnail_loc>${thumbUrl}</video:thumbnail_loc>
      <video:content_loc>${contentUrl}</video:content_loc>
      ${uploadDate}
      ${duration}
    </video:video>
  </url>`;
}

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
${SITE_VIDEOS.map(renderVideoEntry).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
