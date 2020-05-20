import { combineReducers } from "redux";
import user from "./user";
import general from "./general";

const reducers = () => {
  return combineReducers({
    general,
    user
  });
};
export default reducers;
