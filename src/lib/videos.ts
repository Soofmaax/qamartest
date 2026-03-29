export type YouTubeVideo = {
  /** Page path where the video is showcased (ex: "/mariage/"). */
  pagePath: string;
  /** YouTube video id (the "v" query param). */
  youtubeId: string;
  title: string;
  description?: string;
  /** ISO date (YYYY-MM-DD) or full ISO timestamp. */
  uploadDate?: string;
  /** ISO8601 duration (ex: PT1M30S). */
  duration?: string;
  /** Optional explicit thumbnail (otherwise derived from YouTube). */
  thumbnailUrl?: string;
};

export function youTubeWatchUrl(youtubeId: string) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export function youTubeThumbnailUrl(youtubeId: string) {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

/**
 * Videos showcased on the website.
 *
 * Used for:
 * - VideoObject schema injection
 * - video sitemap generation
 */
export const SITE_VIDEOS: YouTubeVideo[] = [];
