import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCity,
  getErr,
  getLatitude,
  getLongitude,
  getStreet,
} from "./redux/locationSlice";

const LocationComponent = (props) => {
  const latitude = useSelector((store) => store.location.coordinates.latitude);
  const longitude = useSelector(
    (store) => store.location.coordinates.longitude
  );
  const street = useSelector((store) => store.location.street);
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
      `http://api.positionstack.com/v1/reverse?access_key=94879775d244c5294fe269e656af45ef&query=${latitude},${longitude}`
    );
    const res = await response.json();
    const json = await res?.data[0];
    console.log(json);
    await dispatch(getStreet(json?.street));
    await dispatch(getCity(json?.county));
  }

  if (props.type === "landingHeader" && (!latitude || !longitude)) {
    console.log(1);
    // findCity();
    return <span>Set Your Location</span>;

  } else if (props.type === "landingHeader" && latitude && longitude) {
    console.log(2);

    findCity();
        return <span>Set Your Location</span>;

  } else if (props.type === "streetCity") {
    console.log(3);

    window.setTimeout(findCity(), 2000);
    return <span>{city + ", " + street} </span>;
  } else if (props.type === "cityOnly") {
    console.log(4);

    window.setTimeout(findCity, 2000);
    return <span>{city} </span>;
  } else if (!latitude || !longitude) {
    console.log(5);
    return <span>Set Your Location</span>;
  } else {
    // findCity();
    return null;
  }
};

export default LocationComponent;
