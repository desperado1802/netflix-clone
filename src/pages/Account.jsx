import React from "react";
import SavedShows from "../components/SavedShows";

export default function Account() {
  return (
    <>
      <div className="w-full text-white">
        <img
          className=" w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/20381feb-65a6-4351-be55-57df47e98e91/TR-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text=3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
}
