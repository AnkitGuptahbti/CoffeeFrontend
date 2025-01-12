import React from "react";
import BannerImg from "../../assets/images/coffee-white.png";
import BgTexture from "../../assets/images/coffee-texture.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { motion } from "motion/react";
const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};
const word =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit soluta voluptatem, maxime laudantium veniam consequatur laborum excepturi dolor accusantium. ";

const wordArr = word.split(" ");
const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className=" container min-h-[550px] flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image section */}
            <div data-aos="zoom-in">
              <img
                src={BannerImg}
                alt=""
                className="max-w-[430px] w-full mx-auto spin drop-shadow-[10px_-10px_0px_rgba(0,0,0,0.2)]"
              />
            </div>
            {/* Text Section */}
            <div className="flex  flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-4xl font-bold font-cursive sm:text-5xl ">
                Premium Blen Coffee
              </h1>
              <p className="text-sm text-gray-500 mt-2 tracking-wide leading-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                fuga dicta ipsum a vel debitis, enim ipsam eum aliquid harum!
              </p>
              <div className="grid grid-cols-2 gap-6 ">
                <div className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-3"
                  >
                    <GrSecure className="text-2xl h-12 w-12 shadow-xl p-3 rounded-full bg-red-300 " />
                    <span>Premium Coffee</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-3"
                  >
                    <IoFastFood className="text-2xl h-12 w-12 shadow-xl p-3 rounded-full bg-red-300 " />
                    <span>Hot Coffee</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.3,
                        delay: 0.6,
                      },
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.3,
                        delay: 0,
                      },
                    }}
                    className="flex items-center gap-3"
                  >
                    <GiFoodTruck className="text-2xl h-12 w-12 shadow-xl p-3 rounded-full bg-red-300 " />
                    <span>Cold Coffee</span>
                  </motion.div>
                </div>
                <div className="space-y-5 border-l-4 border-red-300 pl-5">
                  <h1 className="text-2xl">Tea Lover</h1>
                  <p className="flex flex-wrap gap-2">
                    {wordArr.map((item, index) => (
                      <motion.span
                        key={index}
                        className="text-grey"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.1,
                          delay: index * 0.1,
                          ease: "easeInOut",
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
