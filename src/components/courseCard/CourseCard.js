import "./courseCard.css";
import React from "react";
import { useNavigate } from "react-router-dom";
const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { id, name, duration, instructor, thumbnail } = course;
  return (
    <div
      className="coursecard"
      onClick={() => navigate(`/course-detail/${id}`)}
    >
      <img width={200} src={thumbnail} alt="404" />
      <div className="coursecard-details">
        <h3>{name}</h3>
        <div className="info">
          <p>Instructor: {instructor}</p>
          <span> ({duration})</span>
        </div>
        <button className="button">Know More!</button>
      </div>
    </div>
  );
};

export default CourseCard;
