import "./listingPage.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../components/courseCard/CourseCard";

function ListingPage() {
  const dispatch = useDispatch();
  const searchedData = useSelector((state) => state.searchedData);
  const search = useSelector((state) => state.search);
  return (
    <div className="listing-page-container">
      <div className="listing-page">
        <h2>Available Courses</h2>
        <input
          value={search}
          onChange={(event) => {
            dispatch({ type: "UPDATE_SEARCH", payload: event.target.value });
          }}
          placeholder="Search"
        ></input>
        <div className="courses-container">
          {searchedData.map((course) => {
            return <CourseCard key={course.id} course={course}></CourseCard>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ListingPage;
