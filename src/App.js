import { NavLink, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import ListingPage from "./pages/ListingPage/ListingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { getAllCourses, getEnrolledCourses } from "./backend/fetchData";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllCourses(dispatch);
    getEnrolledCourses(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink
            className="navlink"
            style={({ isActive }) =>
              isActive ? { color: "red" } : { textDecoration: "none" }
            }
            to="/"
          >
            Courses
          </NavLink>
          <NavLink
            className="navlink"
            style={({ isActive }) => (isActive ? { color: "red" } : {})}
            to="/dashboard"
          >
            DashBoard
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<ListingPage></ListingPage>}></Route>
        <Route
          path="/course-detail/:id"
          element={<DetailPage></DetailPage>}
        ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
