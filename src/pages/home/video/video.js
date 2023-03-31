import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Video = () => {
  return (
    <div className="w-full px-[5%] py-[60px] flex justify-center mb-[70px]">
      <div className="w-full max-w-[1300px]">
        <div className="flex w-full px-[2%] flex-col lg:flex-row">
          <div className="lg:w-[40%] w-full lg:min-w-[400px]">
            <div className="relative border-bold w-full lg:w-[400px] h-[450px] border-[#10285d]">
              <div className="absolute bottom-[0px] right-[0px] cursor-pointer  img w-full lg:w-[400px] h-[450px] flex justify-center items-center">
                <div className="w-[60px] rounded-[50%] h-[60px] bg-[#f15f22] flex justify-center items-center">
                  <BsFillPlayFill size={40} color="#fff" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] w-full mt-[25px] lg:mt-0">
            <h1 className="md:text-[45px] text-[30px] font-bold leading-[35px] md:leading-[50px]">
              Don’t let your warehouse hold you back any longer.
            </h1>
            <p className="mt-[20px]">
              Ply Logistics is a full-featured cloud-hosted Warehouse Management
              System that provides big business WMS functionality to small and
              medium businesses. Ply Logistics is an alternative to systems like
              Manhattan Scale, Red Prairie, HighJump, Korber, Paperless,
              Acellos, Datapel, Peoplevox, CartonCloud, 3PLCentral and many
              others.
            </p>

            <p className="mt-[15px]">
              For too long full featured Warehouse Management Systems have been
              available only to big business. We have been working towards
              changing that for some years now. Cloud software has brought
              sophisticated capabilities to small businesses with many options
              for web stores, accounting and inventory management that rival big
              business systems from a few years ago.
            </p>

            <p className="mt-[15px]">
              But highly capable warehouse systems have until now been the
              missing piece of the business software puzzle. Small and medium
              businesses often have operations with similar and even more
              complex needs than big business and the simplified functionality
              for warehouse management in inventory systems and entry-level WMS
              are just inadequate.
            </p>
          </div>
        </div>

        <div className="flex w-full mt-[100px] px-[2%] flex-col lg:flex-row">
          <div className="lg:w-[40%] w-full lg:min-w-[400px]">
            <div className="relative border-bold w-full lg:w-[400px] h-[450px] border-[#10285d]">
              <div className="absolute bottom-[0px] right-[0px] cursor-pointer img2 w-full lg:w-[400px] h-[450px] flex justify-center items-center">
                <div className="w-[60px] rounded-[50%] h-[60px] bg-[#f15f22] flex justify-center items-center">
                  <BsFillPlayFill size={40} color="#fff" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] w-full mt-[25px]">
            <h1 className="md:text-[45px] text-[30px] font-bold leading-[35px] md:leading-[50px]">
              Take control, remove the pain and grow your business
            </h1>
            <p className="mt-[20px]">
              Many people within businesses, owners, managers and staff are
              suffering frustration because of poor business processes, poorly
              implemented systems, and lack of expertise in inventory,
              warehousing and logistics.
            </p>

            <p className="mt-[15px]">
              Some of them are in a death spiral right now due to large amounts
              of dysfunction. Processes are slow and error-prone, more sales
              mean more errors and precious time wasted fixing them. We see it
              all the time and it doesn’t have to be that way.
            </p>

            <p className="mt-[15px]">
              We can help you overcome the dysfunction and run your business
              without stress so you can improve your profitability and grow.
              We’ll help you redesign your processes and implement the most
              modern cloud-hosted logistics software that connects into an
              ecosystem of integrated applications to run your business more
              effectively and more efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
