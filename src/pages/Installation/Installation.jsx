import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getInstalledApps, uninstallApp } from "../../utility/localStorage";

const Installation = () => {
  const appsData = useLoaderData();
  const navigate = useNavigate();
  const [installedAppIds, setInstalledAppIds] = useState(getInstalledApps());

  const installedApps = appsData.filter((app) =>
    installedAppIds.includes(app.id)
  );

  const handleUninstall = (appId, appTitle) => {
    uninstallApp(appId);
    setInstalledAppIds((prev) => prev.filter((id) => id !== appId));
    toast.error(`${appTitle} uninstalled successfully!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-gray-900">
            Your Installed Apps
          </h1>
          <p className="p-2 text-base sm:text-lg text-gray-600">
            Explore All Installed Apps from Your Collection
          </p>
        </div>

        {installedApps.length > 0 ? (
          <>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg p-4 sm:p-6 mb-8 border border-indigo-400/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 font-semibold text-sm sm:text-base">
                    Total Installed
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold mt-1">
                    {installedApps.length} App
                    {installedApps.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <div className="text-5xl sm:text-6xl">✅</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-in fade-in">
              {installedApps.map((app, idx) => (
                <div
                  key={app.id}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                  className="animate-in fade-in slide-in-from-bottom-4 group"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100">
                    <div className="relative overflow-hidden h-48 bg-gray-100">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-bold">
                        ✓ Installed
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h2 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                        {app.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-1">
                        {app.companyName}
                      </p>

                      <div className="flex gap-2 sm:gap-3">
                        <button
                          className="flex-1 px-3 sm:px-4 py-2 border-2 border-indigo-500 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
                          onClick={() => navigate(`/apps/${app.id}`)}
                        >
                          📖 Details
                        </button>
                        <button
                          className="px-3 sm:px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-sm"
                          onClick={() => handleUninstall(app.id, app.title)}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-80 sm:min-h-96 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="text-6xl sm:text-7xl lg:text-8xl mb-4 sm:mb-6 animate-bounce">
              📱
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gray-800">
              No Installed Apps
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 text-center px-4 max-w-md">
              Go explore and install some amazing apps to get started!
            </p>
            <button
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              onClick={() => navigate("/apps")}
            >
              🔍 Browse Apps
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
