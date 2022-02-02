/**
 * Actions File
 */
import * as api from "../api/index.js";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes.js";

// Action Creators

/**
 * Actions Creators are function that return an action.
 * @returns action - object with type and payload.
 *
 */

/** If using redux thunk with action creators.
 * When using redux thunk with action creators for asynchronous logic,
 * use async (dispatch) => and instead of returning action dispatch the action
 * @dispatch dispatch(action)
 */

export const getPosts = () => async (dispatch) => {
  try {
    //   one liner- call api and destructure response
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    // console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    //   one liner- call api and destructure response
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    // console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    //   one liner- call api and destructure response
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    // console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const response = await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    // console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    // console.log(error);
  }
};
