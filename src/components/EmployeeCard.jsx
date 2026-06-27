import userIcon from "../assets/userIcon.svg";

function EmployeeCard({ name, job }) {
  return (
    <div className="employee-card">
      <img src={userIcon} alt="User" className="employee-avatar" />

      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
}

export default EmployeeCard;