import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./Auth";

/** What are reducers?
 * It is a function that accepts a state and an action as params.
 * Then based on action (CRUD OPS), return state changed by the action.
 * Return - state changed by the action
 */

export const reducers = combineReducers({ posts, auth });
