import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import "./Lightbox.css";

function Lightbox({ items, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const [rotation, setRotation] = useState(0);

  const n = items?.length ?? 0;
  const current = n > 0 ? items[Math.min(index, n - 1)] : null;

  useEffect(() => {
    setIndex(startIndex);
    setRotation(0); // Reset rotation on start
  }, [startIndex]);

  const go = useCallback(
    (dir) => {
      if (n <= 1) return;
      setIndex((i) => (i + dir + n) % n);
      setRotation(0); // Reset rotation when moving to next/prev
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

  const handleRotate = (e) => {
    e.stopPropagation();
    setRotation((r) => r + 90);
  };

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged media"
    >
      <button
        type="button"
        className="lightbox-backdrop"
        aria-label="Close"
        onClick={onClose}
      />
      {n > 1 ? (
        <>
          <button
            type="button"
            className="lightbox-nav lightbox-nav--prev"
            aria-label="Previous"
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
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
          >
            ›
          </button>
        </>
      ) : null}

      <div className="lightbox-inner" style={{ pointerEvents: "none" }}>
        <div style={{ pointerEvents: "auto", position: "relative" }}>
          {/* Action Header */}
          <div className="lightbox-actions">
             {current.type !== 'video' && (
                <button type="button" className="lightbox-action-btn" onClick={handleRotate} title="Rotate Image">
                  ↻
                </button>
             )}
             <button type="button" className="lightbox-action-btn" onClick={onClose} title="Close">
               ×
             </button>
          </div>
          
          {current.type === 'video' ? (
             <video
               src={current.src}
               controls
               autoPlay
               className="lightbox-video"
               key={current.src}
             />
          ) : (
            <img
              src={current.src}
              alt={current.alt || "Lightbox item"}
              className="lightbox-img"
              style={{ transform: `rotate(${rotation}deg)` }}
              key={current.src}
            />
          )}

          {n > 1 ? (
            <p className="lightbox-counter" aria-live="polite">
              {index + 1} / {n}
            </p>
          ) : null}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Lightbox;
