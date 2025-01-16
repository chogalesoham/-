import React from "react";
import Banner from "../compontes/banner";
import ContactUs from "../compontes/contact-us";
import ContactInfo from "../compontes/contact-info";

const page = () => {
  return (
    <div>
      <Banner params={{ url: "/Contact Us" }} />
      <ContactInfo />
      <ContactUs />
    </div>
  );
};

export default page;
