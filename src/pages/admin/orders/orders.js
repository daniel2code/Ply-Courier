import React, { useState } from "react";
import "./orders.css";
import Table from "./ordersTable/table";
import Wrapper from "../wrapper/wrapper";
import { SiVirustotal } from "react-icons/si";
import Orderform from "./ordersTable/orderForm/orderform";

const Orders = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm((prev) => !prev);
  };

  return (
    <Wrapper>
      {openForm && <Orderform handleOpenForm={handleOpenForm} />}
      <div className="p-4">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="max-w-[1250px] w-full">
            <div className="stats_box p-4 mt-3 flex-col items-center w-full">
              <h2 className="text-[25px]">Orders Ranking</h2>

              <div className="mt-4 flex justify-between">
                <div className="flex gap-x-3">
                  <div className={`p-3 bg-[#00000030] rounded-full`}>
                    <SiVirustotal size={25} />
                  </div>

                  <div>
                    <p className="text-[20px]">300</p>
                    <p className="text-[12px]">orders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[20px]">
              <Table handleOpenForm={handleOpenForm} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Orders;
