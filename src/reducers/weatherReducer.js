import { GET_WEATHER, WEATHER_LOADING } from "../actions/types";

const initialState = {
  weather: [],
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case WEATHER_LOADING:
      return {
        ...state,
        weather: [],
        loading: true
      };
    case GET_WEATHER:
      return {
        ...state,
        weather: state.weather.includes(action.payload)
          ? state.weather
          : [action.payload, ...state.weather],
        loading: false
      };
    default:
      return state;
  }
}
