import React from "react";
import Logo from "../../assets/images/coffee_logo.png";
import { GiCoffeeCup } from "react-icons/gi";

const Navbar = () => {
  const Menus: any[] = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Service",
      link: "/service",
    },
    {
      id: 3,
      name: "About",
      link: "/about",
    },
  ];
  return (
    <div>
      <div className="bg-gradient-to-r from-[#4b2e2e] to-[rgb(102,70,32)] text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center gap-4">
            {/* logo sectoin */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl flex  items-center  justify-center  gap-2 tracking-wider  font-cursive "
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Coffee Cafe
              </a>
            </div>

            {/* links section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className=" flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4 ">
                {Menus.map((item, index) => {
                  return (
                    <li key={index} className="px-2">
                      <a
                        href={item.link}
                        className=" inline-block  text-xl  py-4 px-4 text-white/70 hover:text-white duration-200  "
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <button className=" bg-primary px-4 py-2  rounded-full text-white font-bold  hover:scale-105 duration-200  flex items-center gap-1    ">
                Order
                <GiCoffeeCup />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
