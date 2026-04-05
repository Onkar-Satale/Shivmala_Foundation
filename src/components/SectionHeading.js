import { Link } from "react-router-dom";
import "./SectionHeading.css";

function SectionHeading({
  title,
  kicker = "HELP US NOW",
  titleId,
  kickerTone = "muted",
  kickerTo,
}) {
  const kickerClass =
    kickerTone === "magenta"
      ? "section-heading-kicker section-heading-kicker--magenta"
      : "section-heading-kicker";

  return (
    <header className="section-heading">
      <span className="section-heading-icon" aria-hidden="true">
        ♥
      </span>
      <h2 id={titleId} className="section-heading-title">
        {title}
      </h2>
      {kickerTo ? (
        <Link to={kickerTo} className={kickerClass}>
          {kicker}
        </Link>
      ) : (
        <p className={kickerClass}>{kicker}</p>
      )}
    </header>
  );
}

export default SectionHeading;
