import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { ToastContainer, toast } from "react-toastify";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

const Shipment = () => {
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
          console.log("dataaaaa", r);

          if (!filtered) notify("incorrect track code");
          else {
            navigate("/tracker", { state: r });
          }
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

  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center">
        <div
          className={`w-[100%] flex justify-center items-center wrapper-shipment`}
        >
          <h2 className="text-white text-[30px] sm:text-[45px] font-bold">
            Shipping Tracking
          </h2>
        </div>
      </div>
      <div className="w-full px-[5%] py-5 flex justify-center mb-[70px]">
        <div className="w-full max-w-[1300px]">
          <div className="w-full flex mt-[50px] flex-col md:flex-row ">
            <div className="w-full md:w-[40%] h-[200px] md:h-[380px] bg-[#f15f22] flex justify-start md:justify-center items-center">
              <div className=" px-[5%] md:px-[7%] py-[5%]">
                <p className="font-bold text-[20px] text-white ">Track Now</p>

                <p className="font-bold mt-[5px] text-[30px] md:text-[40px] text-white leading-[35px] md:leading-[45px] ">
                  Track & Trace <br className="hidden md:flex" /> Your Freight
                </p>
              </div>
            </div>

            <div className="w-full md:w-[60%] h-[380px] bg-[#10285d] flex flex-col justify-center items-center py-[5%] px-[5%]">
              <p className="text-white text-[16px] md:text-[18px] text-center">
                To track your package, please enter the tracking code in the box
                below and press the "Track Now" button. This was given to you on
                your receipt and in the confirmation email you should have
                received.
              </p>
              <form action="#" className="mt-[40px] w-full">
                <input
                  type="text"
                  placeholder="Your Tracking Code"
                  className="bg-white w-full h-[55px] pl-3 outline-none rounded-[7px]"
                  onChange={(e) => setTrackNum(e.target.value)}
                  maxLength="10"
                  minLength="10"
                />
                <button
                  disabled={loading}
                  onClick={fetchData}
                  className=" md:h-[55px] h-[45px] w-full md:w-[220px] bg-[#f15f22] mt-[20px] text-white font-semibold px-[20px] rounded-[7px] "
                >
                  {loading ? "Tracking..." : "Track & Trace"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default Shipment;
