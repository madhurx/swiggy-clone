import React from "react";
import info1 from "../../../src/assets/images/LandingPgInfo1.webp";
import info2 from "../../../src/assets/images/LandingPgInfo2.webp";
import info3 from "../../../src/assets/images/LandingPgInfo3.webp";

const LandingPgInfo = () => {
  return (
    <div>
      <div className="bg-[#1b110a]">
        <div className="grid grid-cols-3 justify-items-center pb-20">
          <div className="grid col-span-1">
            <img src={info1} className="h-52 mx-auto mb-8" alt="info1"/>
            <h1 className="font-bold text-lg pb-4 text-[#f7e0d0] px-24 justify-self-center">No Minimum Order</h1>
            <h1 className="text-sm text-[#d3a17a] px-24 justify-self-center text-center">Order in for yourself or for the group, with no restrictions on order value</h1>
          </div>

          <div className="grid col-span-1">
            <img src={info2} className="h-52 mx-auto mb-8" alt="info2"/>
            <h1 className="font-bold text-lg pb-4 text-[#f7e0d0] px-24 justify-self-center">Live Order Tracking</h1>
            <h1 className="text-sm text-[#d3a17a] px-24 justify-self-center text-center">Know where your order is at all times, from the restaurant to your doorstep</h1>
          </div>

          <div className="col-span-1 grid">
            <img src={info3} className="h-52 mx-auto mb-8" alt="info3"/>
            <h1 className="font-bold text-lg pb-4 text-[#f7e0d0] px-24 justify-self-center">Lightning-Fast Delivery</h1>
            <h1 className="text-sm text-[#d3a17a] px-24 justify-self-center text-center ">Experience Swiggy's super fast delivery for food delivered fresh & on time
</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPgInfo;
