import React from "react";
import { MdDescription } from "react-icons/md";
import img1 from "../../assets/images/coffee2.png";

const service: any[] = [
  {
    id: 1,
    img: img1,
    name: "Espresso",
    description:
      "Espresso is a coffee-based drink that is prepared by forcing hot water under pressure through finely ground coffee beans.",
    aosDelay: "300",
  },
  {
    id: 2,
    img: img1,
    name: "Latte",
    description:
      "A latte is a coffee drink made with espresso and steamed milk, often with a small amount of foam on top.",
    aosDelay: "500",
  },
  {
    id: 3,
    img: img1,
    name: "Cappuccino",
    description:
      "A cappuccino is a coffee drink that is prepared with espresso, hot milk, and steamed milk foam.",
    aosDelay: "700",
  },
  {
    id: 4,
    img: img1,
    name: "Mocha",
    description:
      "A mocha is a coffee drink that is made with espresso, chocolate syrup, and steamed milk.",
    aosDelay: "900",
  },
  {
    id: 5,
    img: img1,
    name: "Macchiato",
    description:
      "A macchiato is a coffee drink that is made with espresso and a small amount of milk foam.",
    aosDelay: "1100",
  },
  {
    id: 6,
    img: img1,
    name: "Flat White",
    description:
      "A flat white is a coffee drink that is made with espresso and steamed milk, with no milk foam.",
    aosDelay: "1300",
  },
  {
    id: 6,
    img: img1,
    name: "Flat White",
    description:
      "A flat white is a coffee drink that is made with espresso and steamed milk, with no milk foam.",
    aosDelay: "1800",
  },
  {
    id: 6,
    img: img1,
    name: "Flat White",
    description:
      "A flat white is a coffee drink that is made with espresso and steamed milk, with no milk foam.",
    aosDelay: "1800",
  },
  {
    id: 6,
    img: img1,
    name: "Flat White",
    description:
      "A flat white is a coffee drink that is made with espresso and steamed milk, with no milk foam.",
    aosDelay: "1800",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10 ">
        <div className="container">
          {/* Heading Title */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 font-cursive">
              Best coffee for you
            </h1>
          </div>
          {/*  service card selection */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-14 mt-14 place-items-center gap-y-11">
            {service.map((service, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={service.aosDelay}
                  key={index}
                  className="    bg-white rounded-2xl hover:bg-primary  hover:text-white  shadow-xl duration-200 max-w-[300px]  group  relative  "
                >
                  <div className=" h-[122px]">
                    <img
                      src={service.img}
                      alt=""
                      className="max-w-[200px] block  mx-auto transform -translate-y-14 group-hover:scale-110  group-hover:rotate-6 duration-200  "
                    />
                  </div>
                  {/* Text content */}
                  <div className=" p-4 text-center">
                    <h1 className="text-xl font-bold  text-gray-600 group-hover:text-white ">
                      {service.name}
                    </h1>
                    <p className="  group-hover:text-white duration-300 text-sm line-clamp-2  text-gray-700">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
