import React from "react";

import HeroImg from "../../assets/images/coffee2.png";
import { motion } from "motion/react";
import { easeInOut } from "motion";
const Homepage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 50,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className="min-h-[550px] sm:min-h-[600px] bg-[#39040c] flex justify-center items-center text-white"
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text content section */}
          <div className="order-2 sm:order-1 flex flex-col justify-center gap-6 pl-4">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              We serve the richest{" "}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="text-primary font-cursive"
              >
                Coffee
              </span>{" "}
              in the city
            </h1>
            <div data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
              <button className="bg-gradient-to-r from-primary to-[#967259]/80 text-white hover:scale-105 duration-200 rounded-full mt-2 px-4 py-2">
                Coffee And Code
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src={HeroImg}
              alt=""
              className="w-[300px] sm-:w-[450px] sm:scale-110 mx-auto  spin"
            />
            {/* Animating the "Hey Ayush" text */}
            <div className="bg-gradient-to-r from-primary to-primary/80 absolute top-0 -translate-x-1/2 translate-y-1/2 animate-slide-top transition-all duration-100 p-3 rounded-xl">
              <h1>Hey Ayush</h1>
            </div>
            {/* Animating the "Coffee" text */}
            <div className="bg-gradient-to-r from-primary to-primary/80 bottom-0 translate-x-1/2 -translate-y-1/2 absolute animate-slide-bottom p-3 rounded-xl">
              <h1>Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
