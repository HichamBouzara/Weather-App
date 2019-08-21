import {
  GET_CITIES,
  CLEAR_ERRORS,
  GET_ERRORS,
  CITIES_LOADING,
  DELETE_CITY,
  EDIT_CITY,
  ADD_CITY
} from "./types";

// Set loading state
export const setCitiesLoading = () => {
  return {
    type: CITIES_LOADING
  };
};

// Get Cities
export const getCities = () => dispatch => {
  dispatch(setCitiesLoading());
  dispatch({
    type: GET_CITIES,
    payload: {}
  });
};

// Delete City
export const deleteCity = id => dispatch => {
  dispatch({
    type: DELETE_CITY,
    payload: id
  });
};

// Edit City
export const editCity = city => dispatch => {
  dispatch({
    type: EDIT_CITY,
    payload: city
  });
  dispatch(getCities());
};

// Add City
export const addCity = city => dispatch => {
  dispatch({
    type: ADD_CITY,
    payload: city
  });
  dispatch(getCities());
};
