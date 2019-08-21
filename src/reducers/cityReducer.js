import {
  GET_CITIES,
  CITIES_LOADING,
  DELETE_CITY,
  EDIT_CITY,
  ADD_CITY
} from "../actions/types";

const initialState = {
  id: 2,
  cities: [{ _id: 1, name: "London" }, { _id: 0, name: "Paris" }],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CITIES_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CITIES:
      return {
        ...state,
        loading: false
      };
    case DELETE_CITY:
      return {
        ...state,
        cities: state.cities.filter(c => c._id !== action.payload)
      };
    case EDIT_CITY:
      return {
        ...state,
        cities: [
          ...state.cities.map(c => {
            if (c._id === action.payload._id) return action.payload;
            else return c;
          })
        ]
      };
    case ADD_CITY:
      return {
        ...state,
        cities: [
          { name: action.payload.name, _id: initialState.id++ },
          ...state.cities
        ]
      };
    default:
      return state;
  }
}
