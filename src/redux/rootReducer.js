import { combineReducers } from "redux";
import usersReducer from "./slices/user.slice";
import moviesReducer from "./slices/movie.slice";
import bookingReducer from "./slices/booking.slice";
import manageReducer from "./slices/manage.slice";

export default combineReducers({
  users: usersReducer,
  movies: moviesReducer,
  booking: bookingReducer,
  manage: manageReducer,
});
