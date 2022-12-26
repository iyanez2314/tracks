import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to sign up with that email and password
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signing up!",
      });
    }
    // if we sign up, modify our state, and say that we are authenticated
    // if signing up fails we need to refelect that it failed
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to sign in
    // handle success by updating state
    // handle faliure
  };
};

const signout = (dispatch) => {
  return () => {
    // sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, errorMessage: "" }
);
