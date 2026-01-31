import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { installApp, isAppInstalled } from "../../utility/localStorage";
import { FaCommentDots, FaDownload, FaStarHalfAlt } from "react-icons/fa";
import { LuFileStack } from "react-icons/lu";
import { toast } from "react-toastify";

const AppDetailsHeader = () => {
  const appsData = useLoaderData();
  const { id } = useParams();
  const app = appsData.find((a) => a.id === parseInt(id));
  const [installed, setInstalled] = useState(isAppInstalled(parseInt(id)));

  const handleInstall = () => {
    if (app) {
      installApp(app.id);
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      {/* App Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16">
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <img
              src={app.image}
              alt={app.title}
              className="rounded-xl shadow-xl w-full hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-gray-900">
              {app.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-semibold">
              {app.companyName}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
            <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl mb-2">
                <FaStarHalfAlt />
              </div>
              <div className="text-xs sm:text-sm opacity-90 font-semibold">
                Rating
              </div>
              <div className="text-2xl sm:text-3xl font-bold">
                {app.ratingAvg}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-400 to-indigo-500 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl mb-2">
                <FaDownload />
              </div>
              <div className="text-xs sm:text-sm opacity-90 font-semibold">
                Downloads
              </div>
              <div className="text-2xl sm:text-3xl font-bold">
                {(app.downloads / 1000000).toFixed(0)}M
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-teal-500 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl mb-2">
                <FaCommentDots />
              </div>
              <div className="text-xs sm:text-sm opacity-90 font-semibold">
                Reviews
              </div>
              <div className="text-2xl sm:text-3xl font-bold">
                {(app.reviews / 1000).toFixed(0)}K
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl mb-2">
                <LuFileStack />
              </div>
              <div className="text-xs sm:text-sm opacity-90 font-semibold">
                Size
              </div>
              <div className="text-2xl sm:text-3xl font-bold">{app.size}MB</div>
            </div>
          </div>

          <button
            className={`w-full py-2.5 sm:py-3 px-4 font-bold text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ${
              installed
                ? "bg-green-500 text-white cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 hover:shadow-xl"
            }`}
            onClick={handleInstall}
            disabled={installed}
          >
            {installed ? "✓ Installed" : "📥 Install Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsHeader;
