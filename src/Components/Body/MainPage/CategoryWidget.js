import React, { useEffect, useState } from "react";
import { CATEGORY_API_URL, CATEGORY_IMG_CDN } from "../../../utitls/constants";
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
    infinite: true,
    speed: 1200,
    slidesToShow: 6,
    slidesToScroll: 0.1,
    arrows: true,
    accessibility: true,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    // prevArrow: (
    //   <NavigateBeforeIcon sx={{ fontSize: 40, color: deepOrange[600] }} />
    // ),
    // nextArrow: (
    //   <NavigateNextIcon sx={{ fontSize: 40, color: deepOrange[600] }} />
    // ),
    style: {
      width: "600%",
    },
  };

  async function getCategory() {
    try {
      const response = await fetch(CATEGORY_API_URL);
      const json = await response.json();
      let a = json?.data?.cards[1]?.card?.card?.imageGridCards?.info;
      setAllCategory(a);
    } catch (err) {}
  }

  return (
    <div className=" h-64 px-44">
      <div className="border-b-2 my-8">
        <div className="my-5">
          <h1 className="text-2xl font-bold">What's on your mind?</h1>
        </div>

        <div className="grid grid-cols-6 my-2">
          {allCategory.length === 0 ? (
             () => {
              for(let i=1;i<=6;i++){
                <CategoryShimmer />
              
            }}
            
          ) : (
            <>
              {allCategory.length > 6 ? (
                <>
                  <Slider {...settings}>
                    {allCategory.map((info) => {
                      return (
                        <div className="col-span-1" key={info?.id}>
                          <img
                            src={CATEGORY_IMG_CDN + info?.imageId}
                            alt={info?.action?.text}
                          />
                        </div>
                      );
                    })}
                  </Slider>{" "}
                </>
              ) : (
                <>
                  {allCategory.map((info) => {
                    return (
                      <div className="col-span-1" key={info?.id}>
                        <img
                          src={CATEGORY_IMG_CDN + info?.imageId}
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
