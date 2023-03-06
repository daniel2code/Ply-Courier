import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";
import { ToastContainer, toast } from "react-toastify";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";

const Hero = () => {
  const [trackData, setTrackData] = useState(null);
  const [trackNum, setTrackNum] = useState();
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState(false);

  const navigate = useNavigate();
  const notify = (text) => toast(text);

  const fetchData = async (e) => {
    e.preventDefault();
    if (!trackNum) {
      notify("Enter your tracking code");
    } else {
      setLoading(true);
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });

        try {
          let r = await list.filter((item) => {
            return item.id === trackNum;
          });

          setFiltered(r);

          if (!filtered) notify("incorrect track code");
          else {
            navigate("/tracker", { state: r });
          }
          console.log(r);
          setLoading(false);
        } catch (err) {
          notify("incorrect track code");
          setLoading(false);
        }

        setTrackData(list);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log(trackNum);

  return (
    <div className="w-full">
      <div className="hero-wrap w-full flex items-center justify-center px-[5%]">
        {/* <!-- Single Slider --> */}
        <div className="max-w-[1300px] w-full">
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <h1 className="md:text-[70px] text-[40px] leading-[45px] text-white font-extrabold md:leading-[75px]">
                    Safe & Reliable{" "}
                    <span className="text-[#f15f22]">Logistic</span> <br />{" "}
                    Solutions!
                  </h1>
                </div>
                {/* <!--Hero form --> */}
                <form action="#" className="mt-[40px] flex">
                  <input
                    type="text"
                    placeholder="Your Tracking ID"
                    className="bg-white w-full max-w-[500px] h-[55px] pl-3 outline-none rounded-l-lg"
                    onChange={(e) => setTrackNum(e.target.value)}
                    maxLength="10"
                    minLength="10"
                  />
                  <button
                    disabled={loading}
                    onClick={fetchData}
                    className="h-[55px] bg-[#f15f22] text-white font-semibold px-[20px] rounded-r-lg"
                  >
                    {loading ? "Tracking..." : "Track & Trace"}
                  </button>
                </form>
                {/* <!-- Hero Pera --> */}
                <div className="">
                  <p className=" text-white mt-[20px] text-[17px] ">
                    <i>For order status inquiry</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Hero;
