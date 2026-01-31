import React from "react";
import AppDetailsHeader from "./AppDetailsHeader";
import { useNavigate } from "react-router";
import AppDetailsContent from "./AppDetailsContent";
import { FaArrowLeft } from "react-icons/fa";

const AppDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="w-5/6 mx-auto">
      <button
        className="btn m-4 px-4 py-2 text-indigo-600 text-lg font-semibold hover:bg-white rounded-lg transition-all duration-300 mb-6 sm:mb-8 flex items-center gap-2"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft /> Back to All Apps
      </button>
      <AppDetailsHeader />
      <AppDetailsContent />
    </div>
  );
};

export default AppDetails;
