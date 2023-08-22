import React from "react";
import BannerImage from '../../assets/images/bannerImg.webp'
import TimelineIcon from '@mui/icons-material/Timeline';
import {deepOrange} from '@mui/material/colors';

const BodyBanner = () => {
  return (
    <div className="h-72 bg-gradient-to-b from-white to-violet-200 rounded-b-3xl border-t-2">
      <div className="grid-cols-2 grid">

        <div className="col-span-1 content-center grid ps-32 pe-44 pb-16 pt-12">
          <h1 className="font-bold text-5xl text-gray-700">Order Food Online in Delhi</h1>
          <h1 className="ps-10 pt-2"><TimelineIcon style={{ fontSize: 55, color: deepOrange[400]}}/></h1>
        </div>

        <div className="col-span-1">
            <img src={BannerImage} alt="" className="h-72"/>
        </div>

      </div>
    </div>
  );
};

export default BodyBanner;
