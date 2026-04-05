import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import "./Lightbox.css";

function Lightbox({ items, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const n = items?.length ?? 0;
  const current = n > 0 ? items[Math.min(index, n - 1)] : null;

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  const go = useCallback(
    (dir) => {
      if (n <= 1) return;
      setIndex((i) => (i + dir + n) % n);
    },
    [n]
  );

  const onKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    },
    [onClose, go]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onKey]);

  if (!current || n === 0) return null;

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged photo"
    >
      <button
        type="button"
        className="lightbox-backdrop"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="lightbox-inner">
        <button type="button" className="lightbox-close" onClick={onClose}>
          ×
        </button>
        {n > 1 ? (
          <>
            <button
              type="button"
              className="lightbox-nav lightbox-nav--prev"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
            >
              ‹
            </button>
            <button
              type="button"
              className="lightbox-nav lightbox-nav--next"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
            >
              ›
            </button>
            <p className="lightbox-counter" aria-live="polite">
              {index + 1} / {n}
            </p>
          </>
        ) : null}
        <img
          src={current.src}
          alt={current.alt}
          className="lightbox-img"
          key={current.src}
        />
      </div>
    </div>,
    document.body
  );
}

export default Lightbox;
