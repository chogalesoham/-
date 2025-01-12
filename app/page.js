import AboutUs from "./compontes/about";
import ContactUs from "./compontes/contact-us";
import ServiceSection from "./compontes/services";
import ImageSlider from "./compontes/slider";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <AboutUs />

      <ServiceSection />
      <ContactUs />
    </>
  );
}
