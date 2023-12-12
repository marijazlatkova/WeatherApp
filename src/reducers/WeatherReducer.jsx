import {
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAIL,
} from "../constants/WeatherConstants";

const initialState = {
  weather: {},
  error: undefined,
};

const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
      };
    case FETCH_WEATHER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default WeatherReducer;
