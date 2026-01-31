import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaDownload, FaStarHalfAlt } from "react-icons/fa";

const AppCard = ({ app }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    navigate(`/apps/${app.id}`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-100 hover:border-indigo-300 hover:-translate-y-1"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="px-4 pt-4 overflow-hidden rounded-lg relative h-48 bg-gradient-to-br from-gray-100 to-gray-50">
        <img
          src={app.image}
          alt={app.title}
          className={`rounded-lg w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </figure>

      <div className="p-4 space-y-3">
        <div>
          <h2 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-1">
            {app.title}
          </h2>
          <p className="text-sm text-gray-500 group-hover:text-indigo-500 transition-colors duration-300 line-clamp-1">
            {app.companyName}
          </p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="space-y-3">
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-lg">
              <span className="text-amber-500 text-lg">
                <FaStarHalfAlt />
              </span>
              <span className="font-bold text-gray-800 text-sm">
                {app.ratingAvg}
              </span>
            </div>
            <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg flex items-center gap-2">
              {(app.downloads / 1000000).toFixed(0)}M <FaDownload />
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="btn btn-sm w-full font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
