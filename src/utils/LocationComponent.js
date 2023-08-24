import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCity,
  getErr,
  getLatitude,
  getLongitude,
} from "./redux/locationSlice";

const LocationComponent = () => {
  const latitude = useSelector((store) => store.location.coordinates.latitude);
  const longitude = useSelector(
    (store) => store.location.coordinates.longitude
  );
  const city = useSelector((store) => store.location.city);

  const dispatch = useDispatch();

  useEffect(() => {
    getLocation();
  }, []);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      dispatch(getErr("Geolocation is not supported by this browser."));
    }
  }

  function showPosition(position) {
    dispatch(getLatitude(position.coords.latitude));
    dispatch(getLongitude(position.coords.longitude));
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        dispatch(getErr("User denied the request for Geolocation."));
        break;
      case error.POSITION_UNAVAILABLE:
        dispatch(getErr("Location information is unavailable."));
        break;
      case error.TIMEOUT:
        dispatch(getErr("The request to get user location timed out."));
        break;
      case error.UNKNOWN_ERROR:
        dispatch(getErr("An unknown error occurred."));
        break;
      default:
        dispatch(getErr("UNKNOWN REASON"));
        break;
    }
  }

  async function findCity() {
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=BUgOO7xk6bhYpPsip6iEIvB0ruE2h99R&q=${latitude},${longitude}`
    );
    const res = await response.json();
    const json = await res?.SupplementalAdminAreas[0]?.EnglishName;
    await dispatch(getCity(json));
  }

  if (!latitude || !longitude) {
    return <h1>Set Your Location</h1>;
  } else {
    findCity();
    return <h1>{city}</h1>;
  }
};

export default LocationComponent;
