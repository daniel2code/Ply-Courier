import React, { useEffect, useState } from "react";
import Wrapper from "../wrapper/wrapper";
import "./ahome.css";
import {
  BsCurrencyDollar,
  BsFillCheckCircleFill,
  BsFillEyeSlashFill,
  BsFlagFill,
} from "react-icons/bs";
import { MdPending } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import { SiVirustotal } from "react-icons/si";
import Table from "../orders/ordersTable/table";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { numberFormat } from "../../../utils/numberFormat";

const countriesData = [
  { name: "Egypt", num: 200 },
  { name: "Spain", num: 200 },
  { name: "USA", num: 450 },
  { name: "Germany", num: 300 },
];

const Ahome = () => {
  const [data, setData] = useState(null);

  const statsData = [
    {
      num: data?.length,
      type: "Total orders",
      color: "#00000030",
      icon: <SiVirustotal size={25} />,
    },

    {
      num: 30,
      type: "Pending",
      color: "#00000030",
      icon: <MdPending size={25} />,
    },

    {
      num: 830,
      type: "Completed",
      color: "#00000030",
      icon: <BsFillCheckCircleFill size={25} />,
    },

    {
      num: 230,
      type: "Cancelled",
      color: "#00000030",
      icon: <TiCancel size={25} />,
    },

    {
      num: data?.length,
      type: "Sales",
      color: "#00000030",
      icon: <BsCurrencyDollar size={25} />,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });

        setData(list);
      } catch (err) {
        console.log(err);
      }
    };

    async function resolveRequests() {
      await fetchData();
    }

    resolveRequests();
  }, []);

  const getTotalAmount = data?.reduce(
    (acc, curr) => acc + Number(curr.amount), 0
  );

  console.log(data)

  return (
    <>
      <Wrapper>
        <div className="p-4">
          <div className="w-full flex justify-center items-center flex-col">
            <div className="stats_box mt-3 p-4 max-w-[1250px] flex-col items-center w-full">
              <h2 className="text-[25px]">Statistics</h2>

              <div className="mt-4 flex justify-between flex-wrap gap-y-3">
                {statsData.map((item, i) => {
                  return (
                    <div className="flex gap-x-3 w-1/2 sm:w-fit" key={i}>
                      <div className={`p-3 bg-[#00000030] rounded-full`}>
                        {item.icon}
                      </div>

                      <div className="flex flex-col justify-center items-center">
                        <p className="text-[20px]">{item.num}</p>
                        <p className="text-[12px]">{item.type}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full flex justify-center mt-10">
              <div className="max-w-[1250px] w-full">
                <div className="w-full flex flex-col md:flex-row justify-between gap-y-4">
                  <div className="bal_box p-4 bg-[#000] w-full md:w-[48%] md:max-w-[600px] px-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="sm:text-[28px] font-semibold text-white text-[22px]">
                          {numberFormat(getTotalAmount) || 0}
                        </p>
                        <p className="text-white text-[15px] sm:text-[16px]">
                          Balance
                        </p>
                      </div>
                      <BsFillEyeSlashFill color="white" size={27} />
                    </div>
                  </div>

                  <div className="bal_box p-4 bg-[#000] w-full md:w-[48%] md:max-w-[600px]">
                    <p className="text-[20px] font-medium text-white">
                      Top Countries
                    </p>

                    <div className="mt-5 flex justify-between flex-wrap gap-y-3">
                      {countriesData.map((item) => {
                        return (
                          <div className="flex items-center gap-x-[10px]">
                            <div
                              className={`h-[37px] w-[37px] flex items-center justify-center bg-[#fff] rounded-full`}
                            >
                              <BsFlagFill color="black" />
                            </div>
                            <div>
                              <p className="text-[16px] font-medium text-white">
                                {item.name}
                              </p>
                              <p className="text-[13px] text-white">
                                {item.num}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[1250px] w-full mt-9">
              <div className="w-full flex justify-between">
                <Table data={data} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Ahome;
