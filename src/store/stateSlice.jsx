import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  selectedState: "India",
  stateData: {
    name: "India",
    activeCases: 65300,
    recovered: 102700,
    deaths: 5900,
    totalCases: 173900,
  },
};

const stateSlice = createSlice({
  name: "stateData",
  initialState,
  reducers: {
    setStateData: (state, action) => {
      state.selectedState = action.payload.state;
      state.stateData = action.payload.data;
    },
  },
});

export const {setStateData} = stateSlice.actions;

export default stateSlice.reducer;
