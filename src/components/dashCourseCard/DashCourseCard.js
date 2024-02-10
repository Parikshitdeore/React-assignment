import "./dashCourseCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const DashCourseCard = ({ course }) => {
  const { id, name, instructor, completed, thumbnail } = course;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="dash-coursecard">
      <img
        src={thumbnail}
        alt="404"
        onClick={() => navigate(`/course-detail/${id}`)}
      />
      <div className="dash-coursecard-details">
        <h3>{name}</h3>
        <p>Instructor: {instructor}</p>
        <p>
          Status :{" "}
          <span style={completed ? { color: "green" } : { color: "red" }}>
            {completed ? "Completed" : "Incomplete"}
          </span>{" "}
        </p>
        <progress value={completed ? 100 : 10} max="100"></progress>
        <button
          className="button"
          onClick={() => dispatch({ type: "MARK_TOGGLE", payload: id })}
        >
          {completed ? "Mark as Incomplete" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
};

export default DashCourseCard;
