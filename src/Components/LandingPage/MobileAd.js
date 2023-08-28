import React from "react";
import mobileImg1 from "../../../src/assets/images/MobileAd1.png";
import mobileImg2 from "../../../src/assets/images/MobileAd2.png";
import googlePlay from "../../../src/assets/images/GooglePlay.webp";
import appStore from "../../../src/assets/images/AppStore.webp";

const MobileAd = () => {
  return (
    <div>
      <div className="grid grid-cols-[45%_55%]">
        <div className="col-span-1 items-center grid">
          <div className="grid grid-rows-[35%_45%_20%] grid-flow-row-dense">
            <div className="row-span-1 py-2">
              <h1 className="font-bold text-4xl ps-24 pe-56 pb-2 pt-2">
                Restaurants in your pocket
              </h1>
            </div>

            <div className="row-span-1 mt-3 my-2 pb-2">
              <h1 className="text-lg font-semibold text-gray-400 px-24 pb-3">
                Order from your favorite restaurants & track on the go, with the
                all-new Swiggy app.
              </h1>
            </div>

            <div className="row-span-1 flex flex-nowrap my-2 ps-24">
              <img src={googlePlay} className="h-14 me-2" alt="googlePlay" />
              <img src={appStore} className="h-14" alt="appStore" />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-nowrap">
          <div className="h-[485px] w-[380px] mb-20 p-0">
            <img src={mobileImg1} alt="mobileImg1" />
          </div>

          <div className="h-[485px] w-[380px] mt-20 p-0">
            <img src={mobileImg2} alt="mobileImg2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAd;
