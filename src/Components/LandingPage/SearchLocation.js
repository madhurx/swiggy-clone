import React from "react";
import SearchDivImg from "../../../src/assets/images/LandingPgLocnDivImg.webp";
import SwiggyLogo from "../../../src/assets/images/swiggyLogo.png";

const SearchLocation = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-7 grid grid-rows-4">
          <div className="grid grid-cols-12 mt-14">
            <div className="col-span-4 justify-self-end self-center">
              <img src={SwiggyLogo} className="h-14" />
            </div>

            <div className="col-span-3 justify-self-end"></div>
            <div className="col-span-5 justify-self-center self-center font-semibold">
              <button className="px-6 py-2 hover:text-orange-600">
                <h1>Login</h1>
              </button>
              <button className="px-6 py-2 bg-black text-white">
                <h1>Sign up</h1>
              </button>
            </div>
          </div>

          <div className="self-end">
            <div className="col-span-12 px-20">
              <h1 className="text-4xl font-bold text-gray-800 py-1">
                Late night at office?
              </h1>
              <h1 className="text-2xl text-gray-600 py-1">
                Order food from favourite restaurants near you.
              </h1>
            </div>
          </div>

          <div className="self-center">
            <div className="col-span-12 px-20">
              <input
                type="text"
                className="border border-gray-500 w-9/12 py-4 px-6 border-r-0 font-semibold"
                placeholder="Enter your delivery location"
              />
              <button className="py-4 bg-orange-500 border-orange-500 border px-6 font-bold text-white">
                FIND FOOD
              </button>
            </div>
          </div>

          <div className="self-auto">
            <div className="col-span-12 px-20">
              <h1 className="text-gray-500 py-1">POPULAR CITIES IN INDIA</h1>
              <h1 className="font-bold text-gray-600 pe-20 py-1">
                Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata
                Mumbai Pune & more.
              </h1>
            </div>
          </div>
        </div>

        <div className="col-span-5 w-fit justify-self-end">
          <div className="">
            <img
              src={SearchDivImg}
              alt="SearchDivImg"
              className="h-[540px] justify-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLocation;
