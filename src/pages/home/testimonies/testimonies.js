import React from "react";
import manimg from "../../../assets/image/man.png";

const Testimonies = () => {
  return (
    <div
      className="bg-[#10285d] py-[35px]"
      data-background="assets/img/gallery/section_bg04.jpg"
    >
      <div className="w-full px-[5%] py-[50px] flex justify-center mb-[70px]">
        <div className="w-full max-w-[1300px] flex justify-between">
          <div className="w-[65%]">
            {/* <!-- Section Tittle --> */}
            <div className="section-tittle section-tittle2 mb-25">
              <span className="text-[#f15f22] font-semibold my-4 ">
                Clients Testimonials
              </span>
              <h2 className="font-bold text-[40px] text-white">
                What Our Clients Say!
              </h2>
            </div>
            <div className="">
              {/* <!-- Single Testimonial --> */}
              <div className="">
                {/* <!-- Testimonial Content --> */}
                <div className="">
                  <div className="my-[20px]">
                    <p className="text-[#a4acc3] w-[90%]">
                      Srem ipsum adolor dfsit amet, consectetur adipiscing elit,
                      sed dox beiusmod tempor incci didunt ut labore et dolore
                      magna aliqua. Quis cipsucm suspendisse ultrices gravida.
                      Risus commodo vivercra maecenas accumsan lac.
                    </p>
                  </div>
                  {/* <!-- founder --> */}
                  <div className="mt-[20px] flex items-center">
                    <div className="founder-img">
                      <img src={manimg} alt="human" />
                    </div>
                    <div className="ml-[20px]">
                      <span className="text-[#a4acc3]">Jhaon smith</span>
                      <p className="text-[#677294]">Creative designer</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Single Testimonial --> */}
            </div>
          </div>
          {/* <!-- Form Start --> */}
          <div className="w-[30%] rounded-[15px] bg-[#fff] ">
            <div className="px-[20px] py-[40px]">
              <h3 className="text-[#2c234d] text-[25px] font-semibold text-center ">
                Always listening, always understanding.
              </h3>
              <input
                type="text"
                placeholder="Incoterms"
                className="border border-[#a4acc3] my-[20px] w-full rounded px-4 py-3"
              />
              <button className="rounded bg-[#f15f22] px-4 py-3 text-[#fff] w-full">
                Request a Quote
              </button>
            </div>
          </div>
          {/* <!-- Form End --> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
