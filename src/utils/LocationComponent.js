import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getErr, getLatitude, getLongitude } from "./redux/locationSlice";

const LocationComponent = () => {
  const latitude = useSelector((state) => state.location.coordinates.latitude);
  const longitude = useSelector((state) => state.location.coordinates.longitude);
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
  if(!latitude) return <h1>IF</h1>;   

  return (
    <div>
      ELSE
    </div>
  );
};

export default LocationComponent;
