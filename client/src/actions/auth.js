import { AUTH, SIGNIN, SIGNUP } from "../constants/actionTypes.js";
import * as api from "../api/index.js";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    // LOG In the user and navigate to root
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    // console.log(error);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    // Sign Up the user and navigate to root

    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    // console.log(error);
  }
};
