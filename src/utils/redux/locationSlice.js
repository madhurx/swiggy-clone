import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    coordinates: {
      latitude: null,
      longitude: null,
      err: null,
    },
  },
  reducers: {
    getLatitude: (state, action) => {
      console.log(action);
      state.userData = action.payload;
    },
    getLongitude: (state, action) => {

      console.log(action);

      state.longitude = action.payload;
    },
    getErr: (state, action) => {
      console.log(action);

      state.err = action.payload;
    },
  },
});

export const { getLatitude, getLongitude, getErr } = locationSlice.actions;
export default locationSlice.reducer;
