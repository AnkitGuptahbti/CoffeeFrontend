import React from "react";

import FooterBg from "../../assets/images/coffee-footer.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const BgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  mihHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={BgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-2  pb-20 pt-5">
          {/* Company details */}
          <div className="py-5 px-4 md:col-span-1">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Coffee Cafe
            </a>
            <p className="pt-4">
              Crafted Coffee , Cozy Vibes, Unforgettable Monent your Perfect
              Expresso Escape
            </p>
            <a
              href="https://www.youtube.com"
              className=" inline-block bg-primary rounded-full py-2 px-4 mt-5 text-sm"
            >
              Visit our Youtube Channel
            </a>
          </div>
          {/*  footer link */}
          <div className="col-span grid  grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            {/* First Col link */}
            <div className="py-5 px-4">
              <h1 className="text-xl text-bold sm:text-left mb-3  ">
                Footer Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((item, index) => (
                  <li className="py-2" key={index}>
                    <a
                      href={item.link}
                      className=" hover:text-gray-300 inline-block hover:scale-105 duration-300
                      "
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second col link */}
            <div className="py-5 px-4">
              <h1 className="text-xl text-bold sm:text-left mb-3 ">
                Quick Link
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((item, index) => (
                  <li className="py-2" key={index}>
                    <a
                      href={item.link}
                      className=" hover:text-gray-300 inline-block hover:scale-105 duration-300
                      "
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* company address */}
            <div className="py-5 px-4">
              <h1 className="text-xl text-bold sm:text-left mb-3 ">Address</h1>

              <div>
                <p className="mb-3">Noida ,India</p>
                <p>+91981223431</p>
                {/* social link */}
                <div className="space-x-3 mt-6">
                  <a href="https://www.facebook.com">
                    <FaFacebook className="text-3xl inline-block hover:scale-105 duration-300" />
                  </a>
                  <a href="https://www.linkedin.com">
                    <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-300" />
                  </a>
                  <a href="https://www.instagram.com">
                    <FaInstagram className="text-3xl inline-block hover:scale-105 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
