import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    coordinates: {
      latitude:   null,
      longitude: null,
      err: null,
    },
    city: null,
    street:null,
  },
  reducers: {
    getLatitude: (state, action) => {
      state.coordinates.latitude = action.payload;
    },
    getLongitude: (state, action) => {
      state.coordinates.longitude = action.payload;
    },
    getErr: (state, action) => {
      state.coordinates.err = action.payload;
    },
    getCity: (state, action) =>
    {
      state.city = action.payload;
    },
    getStreet: (state, action) =>
    {
      state.street = action.payload;
    }
  },
});

export const { getLatitude, getLongitude, getErr, getCity, getStreet } = locationSlice.actions;
export default locationSlice.reducer;
