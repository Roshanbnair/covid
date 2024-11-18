import {configureStore} from "@reduxjs/toolkit";
import stateDataReducer from "./stateSlice";

const store = configureStore({
  reducer: {
    stateData: stateDataReducer,
  },
});

export default store;
