/** Placeholder photos (Unsplash) — replace URLs in this file when ready. */

const pool = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773f?w=1600&q=85",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=85",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=85",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=85",
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=85",
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=85",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=85",
  "https://images.unsplash.com/photo-1594708767779-a2f615ec40b1?w=1600&q=85",
  "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1600&q=85",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&q=85",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=85",
  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1600&q=85",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=85",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=85",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=85",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=85",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=85",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=85",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=85",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=85",
  "https://images.unsplash.com/photo-1531206715517-00c8a0311136?w=1600&q=85",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600&q=85",
  "https://images.unsplash.com/photo-1497486751825-599368296a28?w=1600&q=85",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=85",
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
