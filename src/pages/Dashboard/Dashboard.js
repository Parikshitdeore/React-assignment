import "./dashboard.css";
import DashCourseCard from "../../components/dashCourseCard/DashCourseCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const enrolledCourses = useSelector((store) => store.enrolledCourses);

  return (
    <div className="dashboard-container">
      <h2>Enrolled Courses</h2>
      <div className="dashboard-page">
        {enrolledCourses.map((course) => {
          return <DashCourseCard key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
