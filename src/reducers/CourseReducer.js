const courseReducer = (state, action) => {
  switch (action.type) {
    case "ALL_COURSE": {
      return {
        ...state,
        data: [...action.payload],
        searchedData: [...action.payload],
      };
    }

    case "ENROLLED_COURSE": {
      return {
        ...state,
        enrolledCourses: [
          ...action.payload.filter((course) => course.enrolled),
        ],
      };
    }

    case "UPDATE_SEARCH": {
      const searchedData = state.data.filter(
        (course) =>
          course.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          course.instructor.toLowerCase().includes(action.payload.toLowerCase)
      );
      return { ...state, searchedData: searchedData, search: action.payload };
    }

    case "MARK_TOGGLE": {
      const id = action.payload;
      const updatedCourses = state.enrolledCourses.map((course) =>
        course.id === id
          ? { ...course, completed: course.completed ? false : true }
          : course
      );
      return { ...state, enrolledCourses: updatedCourses };
    }

    case "ENROLL": {
      const course = action.payload;
      const ec = state.data.find((e) => e.id === course.id);
      let newData = [
        ...state.data.filter((c) => c.id !== ec.id),
        { ...ec, enrolled: true },
      ];
      let newEc = [
        ...state.enrolledCourses.filter((c) => c.enrolled),
        { ...ec, enrolled: true },
      ];
      return {
        ...state,
        data: [...newData],
        enrolledCourses: [...newEc],
      };
    }

    default:
      return state;
  }
};

export default courseReducer;
