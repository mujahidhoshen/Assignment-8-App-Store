import React from "react";
import Header from "../Header/Header";
import TrustSection from "../../pages/TrustSection/TrustSection";
import TrendingApps from "../../pages/TrendingApps/TrendingApps";

const Home = () => {
  return (
    <div className="mx-auto">
      <Header />
      <TrustSection />
      <TrendingApps />
    </div>
  );
};

export default Home;
