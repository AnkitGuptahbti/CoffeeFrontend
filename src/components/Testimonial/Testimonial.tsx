import React from "react";
import Slider from "react-slick";

const TestimonialData: any[] = [
  {
    id: 1,
    name: "Md. Abu Sayed",
    img: "https://i.ibb.co/9yq9K8R/IMG-20220926-WA0000.jpg",
    description:
      "I am very happy with the service of this company. I have been using their services for a long time and I am very satisfied with their service. I would recommend this company to anyone who is looking for a reliable and trustworthy service provider.",
  },
  {
    id: 2,
    name: "Md. Abu Sayed",
    img: "https://i.ibb.co/9yq9K8R/IMG-20220926-WA0000.jpg",
    description:
      "I am very happy with the service of this company. I have been using their services for a long time and I am very satisfied with their service. I would recommend this company to anyone who is looking for a reliable and trustworthy service provider.",
  },
  {
    id: 3,
    name: "Md. Abu Sayed",
    img: "https://i.ibb.co/9yq9K8R/IMG-20220926-WA0000.jpg",
    description:
      "I am very happy with the service of this company. I have been using their services for a long time and I am very satisfied with their service. I would recommend this company to anyone who is looking for a reliable and trustworthy service provider.",
  },
  {
    id: 4,
    name: "Md. Abu Sayed",
    img: "https://i.ibb.co/9yq9K8R/IMG-20220926-WA0000.jpg",
    description:
      "I am very happy with the service of this company. I have been using their services for a long time and I am very satisfied with their service. I would recommend this company to anyone who is looking for a reliable and trustworthy service provider.",
  },
  {
    id: 5,
    name: "Md. Abu Sayed",
    img: "https://i.ibb.co/9yq9K8R/IMG-20220926-WA0000.jpg",
    description:
      "I am very happy with the service of this company. I have been using their services for a long time and I am very satisfied with their service. I would recommend this company to anyone who is looking for a reliable and trustworthy service provider.",
  },
  {
    id: 6,
    name: "Md. Abu Sayed",
    img: "https://i.ibb.co/9yq9K8R/IMG-20220926-WA0000.jpg",
    description:
      "I am very happy with the service of this company. I have been using their services for a long time and I am very satisfied with their service. I would recommend this company to anyone who is looking for a reliable and trustworthy service provider.",
  },
];
const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  //   arrows: false,//then only be operable using dots below images
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  cssEase: "linear",
  pauseOnHover: true,
  autoplaySpeed: 2000,
  PauseOnFocus: true,
  responsive: [
    {
      //   breakpoint: 1024,
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      //   breakpoint: 600,
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      //   breakpoint: 480,
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <>
      <div className="py-14 mb-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-center font-cursive text-gray-500 ">
              Testimonials
            </h1>
          </div>

          {/* Testimonials cards Sections */}
          <div>
            <Slider {...settings}>
              {TestimonialData.map((item, index) => {
                return (
                  <div className="my-6 " key={index}>
                    <div className="  flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative  ">
                      {/* Image section */}
                      <div className="mb-4">
                        <img
                          src={item.img}
                          alt=""
                          className="rounded-full w-20 h-20  mb-4"
                        />
                      </div>
                      {/* Content Sectoin */}
                      <div className=" flex flex-col  ">
                        <div className="space-y-4 relative ">
                          <p className="text-xs text-gray-500">
                            {item.description}
                          </p>
                          <h1 className="text-xl font-bold text-black/60 mt-2 font-cursive">
                            {item.name}
                          </h1>
                        </div>
                      </div>
                      <p className="text-black/20 text-8xl font-serif absolute top-[60px] right-4">
                        , ,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
