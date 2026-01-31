import React from "react";

import Banner from "../../pages/Banner/Banner";

const Header = () => {
  return (
    <div className="w-5/6 mx-auto">
      <Banner />
      <div className="hero mt-6 px-6">
        <img src="/hero.png" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Header;
