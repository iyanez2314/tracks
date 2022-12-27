import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signout":
      return { token: null, errorMessage: "" };
    case "clear_errorMessage":
      return { ...state, errorMessage: "" };
    case "accountFlow":
      return { errorMessage: "", token: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({
    type: "clear_errorMessage",
  });
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: "accountFlow", payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "accountFlow", payload: response.data.token });
      navigate("TrackList");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signing up!",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "accountFlow", payload: response.data.token });
      navigate("TrackList");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in!",
      });
    }
  };

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
