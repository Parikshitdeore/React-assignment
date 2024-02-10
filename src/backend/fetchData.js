import axios from "axios";

export const getAllCourses = async (dispatch) => {
  try {
    const response = await axios.get(
      "https://6db1b6d8-4f97-4bdb-84d8-35feb3196301-00-ncjlw0sotfeh.kirk.replit.dev/"
    );

    dispatch({ type: "ALL_COURSE", payload: response.data });
  } catch (e) {
    console.log(e.message);
  }
};

export const getEnrolledCourses = async (dispatch) => {
  try {
    const response = await axios.get(
      "https://6db1b6d8-4f97-4bdb-84d8-35feb3196301-00-ncjlw0sotfeh.kirk.replit.dev/"
    );

    dispatch({ type: "ENROLLED_COURSE", payload: response.data });
  } catch (e) {
    console.log(e.message);
  }
};
