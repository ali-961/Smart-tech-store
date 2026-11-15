import avatar from "../assets/team.png";
import "../styles/team-member.css";

function TeamMember({ name, role }) {
  return (
    <div className="member">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default TeamMember;
