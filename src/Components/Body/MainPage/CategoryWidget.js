import React, { useEffect, useState } from "react";
import { SWIGGY_API_URL, SWIGGY_IMG_CDN } from "../../../utitls/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { deepOrange } from "@mui/material/colors";
import CategoryShimmer from "../Shimmers/CategoryShimmer";

const CategoryWidget = () => {
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 1200,
    slidesToShow: 6,
    slidesToScroll: 2,
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
      width: "600%",
    },
  };

  async function getCategory() {
    try {
      const response = await fetch(SWIGGY_API_URL);
      const res = await response.json();
      let json = res?.data?.cards[1]?.card?.card?.imageGridCards?.info;
      setAllCategory(json);
    } catch (err) {}
  }

  return (
    <div className=" h-72 px-44 my-8">
      <div className="border-b-2 ">
        <div className="my-5">
          <h1 className="text-2xl font-bold">What's on your mind?</h1>
        </div>

        <div className="grid grid-cols-6 my-2">
          {allCategory?.length === 0 ? 
            <>
            <CategoryShimmer/>
            <CategoryShimmer/>
            <CategoryShimmer/>
            <CategoryShimmer/>
            <CategoryShimmer/>
            <CategoryShimmer/>
            </>
           : (
            <>
              {allCategory?.length > 6 ? (
                <>
                  <Slider {...settings}>
                    {allCategory.map((info) => {
                      return (
                        <div className="col-span-1" key={info?.id}>
                          <img
                            src={SWIGGY_IMG_CDN + info?.imageId}
                            alt={info?.action?.text}
                          />
                        </div>
                      );
                    })}
                  </Slider>{" "}
                </>
              ) : (
                <>
                  {allCategory?.map((info) => {
                    return (
                      <div className="col-span-1" key={info?.id}>
                        <img
                          src={SWIGGY_IMG_CDN + info?.imageId}
                          alt={info?.action?.text}
                        />
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

export default CategoryWidget;
