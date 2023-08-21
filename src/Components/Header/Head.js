import React from "react";
import SwiggyLogo from "../../assets/images/swiggyLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
 import { orange } from '@mui/material/colors';

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

      <div className="col-span-7 text-center  px-3 py-1 flex">
        <input type="text" className="bg-slate-200 rounded-s-lg w-4/6 h-12" />
        <button className="bg-slate-200 rounded-e-lg h-12 w-1/6">
          <SearchIcon fontSize="medium" color="disabled" />
        </button>
      </div>

      <div className="col-span-1">
        <div className="justify-self-start">
          <AccountCircleIcon fontSize="large"/>
        </div>
      </div>
    </div>
  );
};

export default Head;
