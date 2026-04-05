import BoardMembersSection from "../components/BoardMembersSection";
import "./AboutSubPage.css";

function AboutMembers() {
  return (
    <div className="about-sub-page">
      <header className="about-sub-hero">
        <span className="about-sub-heart" aria-hidden="true">
          ♥
        </span>
        <h1>Members</h1>
        <p className="about-sub-tagline">
          Leadership and governance — Shivmala Foundation
        </p>
      </header>
      <BoardMembersSection id="members-board" />
    </div>
  );
}

export default AboutMembers;
