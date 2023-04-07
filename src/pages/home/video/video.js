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
              Don’t let delivery hold you back any longer.
            </h1>
            <p className="mt-[20px]">
              If you've been held back by delivery issues, it's time to take
              action. Our courier service offers fast, reliable, and affordable
              delivery options that will get your packages where they need to
              go, on time and in good condition.
            </p>

            <p className="mt-[15px]">
              Don't let delivery problems hold you back from achieving your
              goals. Whether you're running a business and need to get products
              to customers quickly, or you're an individual who wants to send a
              gift to a loved one, we've got you covered.
            </p>

            <p className="mt-[15px]">
              With our same-day, next-day, and standard delivery options, as
              well as international shipping services, you can choose the
              delivery speed that works best for your needs. And with our online
              tracking system and secure packaging options, you can have peace
              of mind knowing your package is in good hands.
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
              At Ply logistics, we understand the challenges that come with
              running a business. That's why we offer a wide range of shipping
              and logistics solutions to help you take control of your business
              and focus on what matters most - growing your bottom line.
            </p>

            <p className="mt-[15px]">
              Our experienced team of logistics professionals will work with you
              to develop a customized plan that meets your specific needs and
              fits within your budget. From warehousing and fulfillment to
              last-mile delivery, we'll handle all the details so you can focus
              on what you do best - running your business.
            </p>

            <p className="mt-[15px]">
              One of the keys to removing the pain from your business is to work
              with a logistics provider that you can trust. With our advanced
              tracking technology and real-time updates, you'll always know
              where your packages are and when they're expected to arrive. Plus,
              our team of customer service professionals is available 24/7 to
              answer any questions you may have and provide support whenever you
              need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
