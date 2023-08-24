import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLatitude } from "./utils/redux/locationSlice";

const C = () => {
  const latitude = useSelector((store) => store.location.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      if (location) dispatch(setLatitude(location.coords));
    });
  }, []);
  // const addLatitude = () => {
  //       dispatch(setLatitude(1));
  //       console.log(latitude);
  // }

  return (
    <div>
      <h1>5</h1>
    </div>
  );
};

export default C;
