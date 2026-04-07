/** Placeholder photos (Unsplash) — replace URLs in this file when ready. */

const pool = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
];

const perPage = 6;
const pageCount = 4;

export const photoGalleryPageCount = pageCount;

export function getPhotosForPage(page) {
  const p = Math.max(1, Math.min(pageCount, page));
  const start = (p - 1) * perPage;
  return pool.slice(start, start + perPage).map((src, i) => ({
    id: `p${p}-${i}`,
    src,
    alt: `Shivmala Foundation programme photo ${start + i + 1}`,
  }));
}
