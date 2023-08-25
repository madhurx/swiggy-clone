import React, { useEffect, useState } from "react";
import { SWIGGY_IMG_CDN } from "../../../utils/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { deepOrange } from "@mui/material/colors";
import CategoryShimmer from "../Shimmers/CategoryShimmer";
import TopRestroShimmer from "../Shimmers/TopRestroShimmer";
import { useSelector } from "react-redux";
import store from "../../../utils/redux/store";
import LocationComponent from "../../../utils/LocationComponent";

const TopRestroWidget = () => {
  const [topRestro, setTopRestro] = useState([]);

  useEffect(() => {
    getTopRestro();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 1200,
    slidesToShow: 3,
    centerPadding: "10px",
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
    autoplay: false,
    swipeToSlide: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    prevArrow: (
      <NavigateBeforeIcon sx={{ fontSize: 40, color: deepOrange[600] }} />
    ),
    nextArrow: (
      <NavigateNextIcon sx={{ fontSize: 40, color: deepOrange[600] }} />
    ),
    style: {
      width: "300%",
    },
  };

  async function getFoodAPI() {
    const latitude = store.getState().location.coordinates.latitude;
    const longitude = store.getState().location.coordinates.longitude;
    if (latitude && longitude) {
      const URL = `https://instafood.onrender.com/api/restaurants?lat=${latitude}&lng=${longitude}`;
      return URL;
    }
    else{
      console.log("A");
      window.setTimeout(getFoodAPI, 1000);
    }
  }

  async function getTopRestro() {
    const SWIGGY_API_URL =  await getFoodAPI();
    const res = await fetch(SWIGGY_API_URL);
    const response = await res.json();
    const json = await response?.data?.cards[2]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;
    setTopRestro(json);
  }

  return (
    <div className="px-44 my-8">
      <div className="border-b-2">
        <div className="my-5">
          <h1 className="text-2xl font-bold">
            <LocationComponent type="cityOnly"/>
          </h1>
        </div>

        <div className="grid grid-cols-3 my-2">
          {topRestro?.length === 0 ? (
            <>
              <TopRestroShimmer />
              <TopRestroShimmer />
              <TopRestroShimmer />
            </>
          ) : (
            <>
              {topRestro?.length > 3 ? (
                <>
                  <Slider {...settings}>
                    {topRestro.map((x) => {
                      return (
                        <div className="col-span-1 px-3" key={x?.info?.id}>
                          <img
                            src={SWIGGY_IMG_CDN + x?.info?.cloudinaryImageId}
                            alt={x?.info?.name}
                            className="object-cover object-center h-60 w-full rounded-2xl"
                          />
                          <div className="w-full py-3 px-2">
                            <h1 className="font-semibold text-lg">
                              {x?.info?.name}
                            </h1>
                            <h1 className="font-medium">
                              ⭐ {x?.info?.avgRating}
                            </h1>
                            <h1 className="font-light">
                              {x?.info?.cuisines.slice(0, 5).join(", ")}
                            </h1>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>{" "}
                </>
              ) : (
                <>
                  {topRestro?.map((x) => {
                    return (
                      <div className="col-span-1 px-3" key={x?.info?.id}>
                        <img
                          src={SWIGGY_IMG_CDN + x?.info?.cloudinaryImageId}
                          alt={x?.info?.name}
                          className="object-cover object-center h-60 w-full rounded-2xl"
                        />
                        <div className="w-full py-3 px-2">
                          <h1 className="font-semibold text-lg">
                            {x?.info?.name}
                          </h1>
                          <h1 className="font-medium">
                            ⭐ {x?.info?.avgRating}
                          </h1>
                          <h1 className="font-light text-sm">
                            {x?.info?.cuisines.slice(0, 5).join(", ")}
                          </h1>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopRestroWidget;
