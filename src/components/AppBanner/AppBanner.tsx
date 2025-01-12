import React from "react";
import { TbBackground } from "react-icons/tb";

import bgTexture from "../../assets/images/coffee-beans-bg.png";
import appstore from "../../assets/images/app_store.png";
import playstore from "../../assets/images/play_store.png";

const bgImage = {
  backgroundImage: `url(${bgTexture})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat ",
  height: "100%",
  width: "100%",
};

const AppBanner = () => {
  return (
    <>
      <div style={bgImage} className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div className="space-y-6 max-w-xl mx-auto">
              {/* text content */}
              <h1 className="text-3xl text-center  sm:text-left sm:text-4xl font-semibold pl-3 text-white/90 ">
                Coffee Cafe is Avaiilable for Android and IOS
              </h1>
              <div className=" flex    justify-center sm:justify-start   items-center">
                {/* Images content */}
                <a href="#">
                  <img
                    src={appstore}
                    alt=""
                    className="max-w-[150px] sm:max-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={playstore}
                    alt=""
                    className="max-w-[150px] sm:max-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBanner;
