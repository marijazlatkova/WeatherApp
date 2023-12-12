import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import WeatherReducer from "./reducers/WeatherReducer";

const reducer = {
  WeatherReducer: WeatherReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
