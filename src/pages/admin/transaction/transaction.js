import React from "react";
import Wrapper from "../wrapper/wrapper";
import { BsFillEyeSlashFill } from "react-icons/bs";
import TransactionTable from "./transTable/transTable";

const Transaction = () => {
  return (
    <Wrapper>
      <div className="w-full flex justify-center mt-10 px-5">
        <div className="max-w-[1250px] w-full">
          <div className="bal_box p-4 bg-[#000] rounded w-full sm:w-[48%] sm:max-w-[600px] px-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[28px] font-semibold text-white">
                  100,000,000
                </p>
                <p className="text-white">Balance</p>
              </div>
              <BsFillEyeSlashFill color="white" size={27} />
            </div>
          </div>

          <div className="mt-7">
            <TransactionTable />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Transaction;
