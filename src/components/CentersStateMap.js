import "./CentersStateMap.css";

function CentersStateMap({ src, alt = "Region map" }) {
  if (!src) return null;
  return (
    <div className="centers-state-map centers-state-map--photo">
      <div className="centers-state-map-frame">
        <img src={src} alt={alt} className="centers-state-map-img" loading="lazy" />
      </div>
    </div>
  );
}

export default CentersStateMap;
