import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import weatherReducer from "./weatherReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  city: cityReducer,
  weather: weatherReducer,
  errors: errorReducer
});
