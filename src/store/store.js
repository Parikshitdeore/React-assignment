import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../reducers/CourseReducer";
const initialState = {
  data: [],
  searchedData: [],
  search: "",
  enrolledCourses: [],
};

const store = configureStore({
  reducer: courseReducer,
  preloadedState: initialState,
});

export default store;
