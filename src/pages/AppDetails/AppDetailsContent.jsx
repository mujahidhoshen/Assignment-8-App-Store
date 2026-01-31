import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetailsContent = () => {
  const appsData = useLoaderData();
  const { id } = useParams();
  const app = appsData.find((a) => a.id === parseInt(id));
  return (
    <div>
      {/* Reviews Chart */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-8 sm:mb-12 border border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">
          📊 Reviews Distribution
        </h2>
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 sm:p-6">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={app.ratings}
              margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{ fill: "#666" }} />
              <YAxis tick={{ fill: "#666" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "2px solid #4f46e5",
                  borderRadius: "8px",
                }}
                cursor={{ fill: "rgba(79, 70, 229, 0.1)" }}
              />
              <Bar
                dataKey="count"
                fill="url(#colorGradient)"
                radius={[8, 8, 0, 0]}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
          📱 About This App
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
          {app.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 sm:p-6 border border-indigo-200">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span>📋</span> Details
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Size", value: `${app.size}MB` },
                {
                  label: "Downloads",
                  value: `${(app.downloads / 1000000).toFixed(0)}M+`,
                },
                {
                  label: "Reviews",
                  value: `${(app.reviews / 1000).toFixed(0)}K+`,
                },
                { label: "Rating", value: `${app.ratingAvg}/5.0` },
              ].map((detail) => (
                <li
                  key={detail.label}
                  className="flex justify-between items-center text-sm sm:text-base"
                >
                  <span className="font-semibold text-gray-700">
                    {detail.label}:
                  </span>
                  <span className="text-gray-600">{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 sm:p-6 border border-purple-200">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span>🏢</span> Publisher
            </h3>
            <p className="text-base sm:text-lg text-gray-700 font-semibold mb-4">
              {app.companyName}
            </p>
            <a
              href={app.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full px-4 py-2 border-2 border-purple-500 text-purple-600 font-bold rounded-lg hover:bg-purple-100 transition-all duration-300 inline-block text-center"
            >
              Visit Publisher
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsContent;
