import React, { useEffect, useState } from "react";
import { SWIGGY_IMG_CDN } from "../../../utils/constants";
import { useSelector } from "react-redux";
import store from "../../../utils/redux/store";
import LocationComponent from "../../../utils/LocationComponent";

const Restaurant = () => {
  const [restro, setRestro] = useState([]);

  useEffect(() => {
    getRestro();
  }, []);

  async function getFoodAPI() {
    const latitude = store.getState().location.coordinates.latitude;
    const longitude = store.getState().location.coordinates.longitude;
    if (latitude && longitude) {
      const URL = `https://instafood.onrender.com/api/restaurants?lat=${latitude}&lng=${longitude}`;
      return URL;
    }
    else{
      window.setTimeout(getFoodAPI, 1000);
    }
  }
  async function getRestro() {
    const SWIGGY_API_URL =  await getFoodAPI();
    const response = await fetch(SWIGGY_API_URL);
    const res = await response.json();
    const json = await res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
    setRestro(json);
  }

  return (
    <div className="px-44 my-8">
      <div className="border-b-2">
        <div className="my-5">
          <h1 className="text-2xl font-bold">
            Restaurants with online food delivery in <LocationComponent type="cityOnly" />
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-x-8 gap-y-4">
          {restro?.map((x) => {
            return (
              <div className="col-span-1" key={x?.info?.id}>
                <div>
                  <img
                    src={SWIGGY_IMG_CDN + x?.info?.cloudinaryImageId}
                    className="rounded-2xl h-36 w-full"
                    alt = {x?.info?.name}
                  />
                </div>

                <div className="w-full py-3 px-2">
                  <h1 className="font-medium">{x?.info?.name}</h1>
                  <h1 className="font-thin text-sm">⭐ {x?.info?.avgRating}</h1>
                  <h1 className="font-extralight text-sm">{x?.info?.cuisines.slice(0, 5).join(", ")}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
