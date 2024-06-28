import axios from "axios";

const { base, key } = process.env;

import {
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAIL,
} from "../constants/WeatherConstants";

export const fetchWeatherSuccess = (weather) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: weather,
  };
};

export const fetchWeatherFail = (error) => {
  return {
    type: FETCH_WEATHER_FAIL,
    payload: error,
  };
};

export const fetchWeatherRequest = (city) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${base}/weather?q=${city}&units=metric&appid=${key}`
      );
      console.log(res.data);
      dispatch(fetchWeatherSuccess(res.data));
    } catch (err) {
      dispatch(fetchWeatherFail(err.message));
    }
  };
};
