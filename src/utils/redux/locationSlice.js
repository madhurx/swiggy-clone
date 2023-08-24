import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    latitude: 10,
    longitude: 10,
  },
  reducers: {
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
  },
});

export const { setLatitude, setLongitude } = locationSlice.actions;
export default locationSlice.reducer;
