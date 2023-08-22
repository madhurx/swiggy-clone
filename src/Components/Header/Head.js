import React from "react";
import SwiggyLogo from "../../assets/images/swiggyLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
 import { orange, grey } from '@mui/material/colors';

const Head = () => {
  return (
    <div className="px-5 py-3 shadow-lg shadow-gray-200 grid-flow-col grid items-center">
      <div className="col-span-1 justify-self-end flex">
        <img src={SwiggyLogo} className="h-10" />
      </div>

      <div className="col-span-3 px-3">
        <div className="flex">
            <h1 className="text-gray-400 px-3">|</h1>
          <NearMeIcon fontSize="medium"  style={{ color: orange[600] }}/>
          <h1 className="px-2">Set your location</h1>
        </div>
      </div>

      <div className="col-span-7 text-center  px-3 flex">
        <input type="text" className="bg-slate-200 rounded-s-lg w-8/12 h-14 ps-4" placeholder="Search for restaurant and food"/>
        <button className="bg-slate-200 rounded-e-lg h-14 w-1/12 ">
          <SearchIcon fontSize="medium" color="disabled" />
        </button>
      </div>

      <div className="col-span-1 text-start">
        <div className="">
          <AccountCircleIcon style={{ fontSize: 50, color: grey[800]}} />
        </div>
      </div>
    </div>
  );
};

export default Head;
