import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppBanner from "./components/AppBanner/AppBanner";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      delay: 100,
      offset: 100,
    });
  }, []);

  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Homepage />
      <Services />
      <Banner />
      <AppBanner />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
