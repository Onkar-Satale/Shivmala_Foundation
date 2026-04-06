import "./HomeImageGrid.css";

const gridPhotos = [
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=300&q=80"
];

function HomeImageGrid() {
  return (
    <section className="home-image-grid-section">
      <div className="home-image-grid-header">
        <h2>Make World Happier</h2>
        <p className="home-image-grid-sub">HELP US NOW</p>
      </div>
      <div className="home-image-grid-container">
        {gridPhotos.map((src, i) => (
          <div key={i} className="home-image-grid-item">
            <img src={src} alt="Smiles" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeImageGrid;
