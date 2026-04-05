/**
 * Placeholder YouTube videos — replace youtubeId / title when ready.
 */

const videos = [
  { youtubeId: "M7lc1UVf-VE", title: "Programme highlight (placeholder 1)" },
  { youtubeId: "jNQXAC9IVRw", title: "Community voices (placeholder 2)" },
  { youtubeId: "YE7VzlLtp-4", title: "Event recap (placeholder 3)" },
  { youtubeId: "aqz-KE-bpyQ", title: "Outreach clip (placeholder 4)" },
  { youtubeId: "M7lc1UVf-VE", title: "Workshop moments (placeholder 5)" },
  { youtubeId: "jNQXAC9IVRw", title: "Volunteer diary (placeholder 6)" },
  { youtubeId: "YE7VzlLtp-4", title: "Field visit (placeholder 7)" },
  { youtubeId: "aqz-KE-bpyQ", title: "Annual day (placeholder 8)" },
];

const perPage = 2;
const pageCount = 4;

export const videoGalleryPageCount = pageCount;

export function getVideosForPage(page) {
  const p = Math.max(1, Math.min(pageCount, page));
  const start = (p - 1) * perPage;
  return videos.slice(start, start + perPage).map((v, i) => ({
    id: `v${p}-${i}`,
    ...v,
    thumb: `https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`,
    href: `https://www.youtube.com/watch?v=${v.youtubeId}`,
  }));
}
