import "./detailPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selCourse = data.find((course) => course.id === Number(id));
  const {
    name,
    instructor,
    duration,
    description,
    enrollmentStatus,
    schedule,
    location,
    prerequisites,
    thumbnail,
    syllabus,
    students,
    enrolled,
  } = selCourse;

  return (
    <div className="detail-page-container">
      <div className="course-detail">
        <h2>{name}</h2>
        <div className="intro">
          <div className="intro-detail">
            <p>
              Instructor: {instructor}
              <span>Duration: {duration}</span>
            </p>
            <p>
              {schedule}
              <span>Location: {location}</span>
            </p>
            <p>Description: {description}</p>
            <p>Enrollment Status: {enrollmentStatus}</p>
          </div>
          <img width={200} src={thumbnail} alt="404" />
        </div>
        <div>
          <h3>Syllabus</h3>
          <ul>
            {syllabus.map((sy, i) => (
              <li key={i}>
                <p>Week : {sy.week}</p>
                <p>{sy.topic}</p>
                <p>{sy.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <p>Pre-requisites: {prerequisites.map((pre) => ` ${pre},`)}</p>
        {students.length !== 0 && (
          <p>Students Enrolled: {students.map((s) => `${s.name}, `)}</p>
        )}
        {enrolled ? (
          <button onClick={() => navigate("/dashboard")} className="button">
            Go To Dashboard
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({ type: "ENROLL", payload: selCourse });
            }}
            className="button"
          >
            Enroll!
          </button>
        )}
      </div>
    </div>
  );
}

export default DetailPage;
