import React, { useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";

const Services = () => {
  const [hoverColor, setHoverColor] = useState("orange");

  const handleHoverColor = (color) => {
    setHoverColor(color);
  };

  const serviceData = [
    {
      id: 1,
      title: "International shipping",
      icon: <BsCartCheckFill color={hoverColor} size={40} />,
      text: " Our international shipping service makes it easy to send packages around the world, with delivery to many countries.",
    },
    {
      id: 2,
      title: "Online tracking",
      icon: <BsCartCheckFill color={hoverColor} size={40} />,
      text: "Keep track of your package every step of the way with our convenient online tracking system.",
    },
    {
      id: 3,
      title: "Secure packaging",
      icon: <BsCartCheckFill color={hoverColor} size={40} />,
      text: "We take the utmost care to ensure your package arrives in the same condition it was sent. Our secure packaging options help protect your items during transit.",
    },
  ];
  return (
    <div className="w-full px-[5%] py-7 flex justify-center mb-[70px]">
      <div className="w-full max-w-[1300px]">
        <div className="w-full flex-col flex items-center justify-center pt-[50px]">
          <span className="text-[#f15f22] font-semibold">Our Services</span>
          <h2 className="text-[23px] md:text-[30px] text-center font-semibold">
            What We Can Do For You
          </h2>
        </div>

        <div className="flex justify-between flex-wrap pt-[50px] gap-y-[25px]">
          {serviceData.map((item, i) => {
            return (
              <div
                className="w-[100%] md:w-[48%] lg:w-[32%] border service-card border-gray-300 rounded-md flex flex-col justify-center items-center px-[2%] h-[350px]"
                onMouseEnter={() =>
                  item.id === 1 && handleHoverColor("white")
                }
                onMouseLeave={() =>
                  item.id === 1 && handleHoverColor("#f15f22")
                }
              >
                <span className="">{item.icon}</span>

                <h5 className="text-[25px] font-semibold my-4 ">
                  {item.title}
                </h5>
                <p className="text-center">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
