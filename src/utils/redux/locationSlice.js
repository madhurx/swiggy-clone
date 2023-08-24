import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  // initialState: {
  //   latitude: 10,
  //   longitude: 10,
  // },
  initialState:{userData: null},
  reducers: {
    setLatitude: (state, action) => {
      console.log(action);
      state.userData = action.payload;
    },
    // setLongitude: (state, action) => {
    //   state.longitude = action.payload;
    // },
  },
});

export const { setLatitude } = locationSlice.actions;
export default locationSlice.reducer;
