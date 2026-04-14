import { boardMembers } from "../data/boardMembers";
import "./BoardMembersSection.css";

function BoardMembersSection({ id }) {
  return (
    <section className="board-section" id={id} aria-labelledby="board-heading">
      <span className="board-heart" aria-hidden="true">
        ♥
      </span>
      <p className="board-kicker">MEET</p>
      <h2 id="board-heading" className="board-title">
        Shivmala Foundation Leadership
      </h2>
      <ul className="board-grid">
        {boardMembers.map((m) => (
          <li key={m.name} className="board-card">
            <img src={m.photo} alt="" width={320} height={360} loading="lazy" />
            <div className="board-card-body">
              <h3>{m.name}</h3>
              <p className="board-role">{m.role}</p>
              <p className="board-bio">{m.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BoardMembersSection;
