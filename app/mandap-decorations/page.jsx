import React from "react";
import Banner from "../compontes/banner";
import ServiceSection from "../compontes/services";
import ServicesSections from "../compontes/services-section";

const MandapdDecorations = () => {
  return (
    <div>
      <Banner params={{ url: "/ मंडप डेकोरेशन" }} />
      <ServicesSections />
    </div>
  );
};

export default MandapdDecorations;
