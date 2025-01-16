import React from "react";
import AboutUs from "../compontes/about";
import Banner from "../compontes/banner";

const page = () => {
  return (
    <div>
      <Banner params={{ url: "/About Us" }} />
      <AboutUs />
    </div>
  );
};

export default page;
