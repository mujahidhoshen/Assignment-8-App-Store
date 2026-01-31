import { Link, useLoaderData } from "react-router";
import { CiSearch } from "react-icons/ci";
import AppCard from "../../components/AppCard/AppCard";
import { useState, useMemo } from "react";

const AllApps = () => {
  const appsData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  const filteredApps = useMemo(() => {
    let filtered = appsData.filter((app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === "high-low") {
      filtered.sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === "low-high") {
      filtered.sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "most-popular") {
      filtered.sort((a, b) => b.ratingAvg - a.ratingAvg);
    }

    return filtered;
  }, [searchTerm, sortOrder, appsData]);

  return (
    <div className="w-5/6 mx-auto">
      <div className="text-center m-6 p-4">
        <h1 className="text-5xl font-bold">Our All Applications</h1>
        <p className="text-xl font-semibold m-2">
          Explore all the applications available in our store.
        </p>
      </div>
      <div className="m-4 flex justify-center md:justify-between items-center flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-auto">
          <CiSearch className="absolute left-2 top-2.5" />
          <input
            className="border p-2 pl-8 rounded-lg w-full md:w-64"
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <label className="block text-sm font-semibold text-gray-700">
            📊 Sort By
          </label>
          <select
            className="px-4 py-2.5 sm:py-3 border-2 border-gray-200 focus:border-indigo-500 focus:outline-none rounded-lg transition-all duration-300 bg-white"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Most Popular</option>
            <option value="high-low">Downloads: High to Low</option>
            <option value="low-high">Downloads: Low to High</option>
          </select>
        </div>
        <div className="mt-4 flex flex-col lg:flex-row items-center justify-between gap-4 w-full md:w-auto">
          <h1 className="font-bold text-xl">
            {filteredApps.length} Apps Found
          </h1>
          <p className="text-sm text-gray-600 font-medium">
            Showing{" "}
            <span className="text-indigo-600 font-bold">
              {filteredApps.length}
            </span>{" "}
            of{" "}
            <span className="text-gray-800 font-bold">{appsData.length}</span>{" "}
            apps
          </p>
        </div>
      </div>
      {/* Apps Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-in fade-in">
          {filteredApps.map((app, idx) => (
            <div
              key={app.id}
              style={{ animationDelay: `${idx * 0.05}s` }}
              className="animate-in fade-in slide-in-from-bottom-4"
            >
              <AppCard app={app} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-80 sm:min-h-96 bg-white rounded-xl shadow-lg border border-gray-100 space-y-4 py-4">
          <div className="text-6xl sm:text-7xl lg:text-8xl mb-4 sm:mb-6">
            <img src="/App-Error.png" alt="App-Error.png" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gray-800">
            OOPS! APP NOT FOUND
          </h2>
          <p className="text-gray-600 text-base sm:text-lg text-center px-4">
            The app you're searching for isn't available in our store. Please try a different search.
          </p>
          <div className="flex items-center gap-3 p-2">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => setSearchTerm("")}
            >
              Clear Search
            </button>
            <Link to="/" className="btn btn-primary btn-lg">
              Go Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllApps;
