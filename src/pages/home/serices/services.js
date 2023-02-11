import React, { useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";

const Services = () => {
  const [hoverColor, setHoverColor] = useState("orange");

  const handleHoverColor = (color) => {
    setHoverColor(color);
  };

  const serviceData = [
    {
      title: "Land Transport",
      icon: <BsCartCheckFill color={hoverColor} size={40} />,
      text: " The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.",
    },
    {
      title: "Water Transport",
      icon: <BsCartCheckFill color={hoverColor} size={40} />,
      text: " The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.",
    },
    {
      title: "Air Transport",
      icon: <BsCartCheckFill color={hoverColor} size={40} />,
      text: " The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.",
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
                onMouseEnter={()=> handleHoverColor("white")}
                onMouseLeave={()=>handleHoverColor("orange")}

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
