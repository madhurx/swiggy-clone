import React from "react";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Head from "./Header/Head";
import store from "../utils/redux/store";
import LandingPage from "./LandingPage/LandingPage";
import LocationComponent from "../utils/LocationComponent";

const MainComponent = () => {
  <LocationComponent type="landingHeader"/>
  const latitude = store.getState().location.coordinates.latitude;
  const longitude = store.getState().location.coordinates.longitude;
  console.log(latitude + " Main " + longitude );

  // if (latitude || longitude) {
    return (
      <div>
        <Head />
        <Body />
        <Footer />
      </div>
    );
  // } else {
  //   return (
  //     <div>
  //     <LocationComponent type="landingHeader"/>

  //       <LandingPage />
  //     </div>
  //   );
  // }
};

export default MainComponent;
