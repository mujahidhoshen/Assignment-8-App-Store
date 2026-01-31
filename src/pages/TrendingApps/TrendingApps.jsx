import React from "react";
import { Link, useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
import { FaArrowRight } from "react-icons/fa";

const TrendingApps = () => {
  const appsData = useLoaderData();
  const topApps = appsData.slice(0, 8);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-5/6 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Trending Apps
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Most Downloaded & Rated Apps
            </p>
          </div>
          <button className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer">
            <Link to="/apps" className="flex items-center gap-2">
              Show All <FaArrowRight />
            </Link>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {topApps.map((app, idx) => (
            <div
              key={app.id}
              style={{ animationDelay: `${idx * 0.1}s` }}
              className="animate-in fade-in slide-in-from-bottom-4"
            >
              <AppCard app={app} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
