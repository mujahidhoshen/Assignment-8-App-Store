import React from "react";
import { FaAppStoreIos } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const storeLinks = [
  {
    name: "App Store",
    url: "https://www.apple.com/app-store/",
    icon: <FaAppStoreIos />,
  },
  {
    name: "Play Store",
    url: "https://play.google.com/store",
    icon: <IoLogoGooglePlaystore />,
  },
];

const Banner = () => {
  return (
    <div className="text-center">
      <div className="my-4">
        <h1 className="text-4xl lg:text-6xl font-bold p-2">We Build Effective Apps</h1>
        <p className="font-semibold lg:text-lg lg:p-4">
          At our App Store, we build innovative applications that simplify daily life, spark creativity, and deliver meaningful digital experiences. <br /> Our mission is to transform ideas into powerful solutions that leave a lasting impression.
        </p>
      </div>
      <div className="flex flex-col justify-center m-3 sm:flex-row sm:items-center sm:justify-center">
        {storeLinks.map((store) => (
          <button
            key={store.name}
            className="m-2 px-4 py-2 btn btn-outline text-black rounded-lg hover:bg-blue-700 hover:text-white flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer text-xl"
            onClick={() => window.open(store.url, "_blank")}
          >
            <span className="store-icon mr-2">{store.icon}</span>
            <span className="store-name">{store.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
