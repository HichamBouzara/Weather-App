import {
  GET_WEATHER,
  CLEAR_ERRORS,
  GET_ERRORS,
  WEATHER_LOADING
} from "./types";
import axios from "axios";

// Set loading state
export const setWeatherLoading = () => {
  return {
    type: WEATHER_LOADING
  };
};

// Get Cities
export const getWeather = cities => dispatch => {
  dispatch(setWeatherLoading());
  let weather = [];
  cities.forEach(city => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          city.name
        }&appid=22464404a140f356aa95979ddc0ae815`
      )
      .then(res => {
        dispatch({
          type: GET_WEATHER,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  });

  // dispatch({
  //   type: GET_WEATHER,
  //   payload: weather
  // });
};
