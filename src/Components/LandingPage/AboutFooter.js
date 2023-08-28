import React from "react";
import googlePlay from "../../../src/assets/images/GooglePlay.webp";
import appStore from "../../../src/assets/images/AppStore.webp";

const AboutFooter = () => {
  return (
    <div className="bg-black ">
      <div className="p-16 text-white">
        <div className="grid grid-cols-[25%_25%_35%_15%]">
          <div className="col-span-1">
            <div className="pb-5">
              <h1 className="text-gray-400 font-semibold">COMPANY</h1>
            </div>
            <div>
              <ul>
                <li>About us</li>
                <li className="py-2">Team</li>
                <li className="py-2">Careers</li>
                <li className="py-2">Swiggy Blog</li>
                <li className="py-2">Bug Bounty</li>
                <li className="py-2">Swiggy One</li>
                <li className="py-2">Swiggy Corporate</li>
                <li className="py-2">Swiggy Instamart</li>
                <li className="py-2">Swiggy Genie</li>
                <li className="py-2">Swiggy HDFC Bank Credit Card</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="pb-5">
              <h1 className="text-gray-400 font-semibold">CONTACT</h1>
            </div>
            <div>
              <ul>
                <li className="py-2">Help & Support</li>
                <li className="py-2">Partner with us</li>
                <li className="py-2">Ride with us</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="pb-5">
              <h1 className="text-gray-400 font-semibold">LEGAL</h1>
            </div>
            <div>
              <ul>
                <li className="py-2">Terms & Conditions</li>
                <li className="py-2">Refund & Cancellation</li>
                <li className="py-2">Privacy Policy</li>
                <li className="py-2">Cookie Policy</li>
                <li className="py-2">Offer Terms</li>
                <li className="py-2">Phishing & Fraud</li>
                <li className="py-2">
                  Corporate - Swiggy Money Codes Terms and Conditions
                </li>
                <li className="py-2">
                  Corporate - Swiggy Discount Voucher Terms and Conditions
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <img
              src={appStore}
              className="border-white border-2 rounded-xl mb-10" alt="appStore"
            />
            <img
              src={googlePlay}
              className="border-white border-2 rounded-xl" alt="googlePlay"
            />
          </div>
        </div>
      </div>

        <div className="px-16 py-7">
          <hr className="border-gray-500 border-[0.1px]"/>
        </div>

        <div>
          <div>
            <h1 className="text-gray-400 font-semibold px-16 pb-5">EXPLORE EVERY RESTAURANTS NEAR ME</h1>
          </div>

          <div className="px-16 text-white grid grid-cols-2">
            <h1 className="justify-self-start grid col-span-1">Explore Restaurants Near Me</h1>
            <h1 className="justify-self-end grid col-span-1">Explore Top Rated Restaurants Near Me</h1>

          </div>
        </div>

        <div className="px-16 py-7">
          <hr className="border-gray-500 border-[0.1px]"/>
        </div>

        <div>
          <div>
            <h1 className="text-gray-400 font-semibold px-16 pb-5">EXPLORE EVERY RESTAURANTS NEAR ME</h1>
          </div>

          <div className="px-16 text-white grid grid-cols-2">
            <h1 className="justify-self-start grid col-span-1">Explore Restaurants Near Me</h1>
            <h1 className="justify-self-end grid col-span-1">Explore Top Rated Restaurants Near Me</h1>

          </div>
        </div>


    </div>
  );
};

export default AboutFooter;
