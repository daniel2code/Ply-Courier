import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/wrapper";
import { BsFillEyeSlashFill } from "react-icons/bs";
import TransactionTable from "./transTable/transTable";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { numberFormat } from "../../../utils/numberFormat";

const Transaction = () => {
  const [data, setData] = useState(null);

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
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  return (
    <Wrapper>
      <div className="w-full flex justify-center mt-10 px-5">
        <div className="max-w-[1250px] w-full">
          <div className="bal_box p-4 bg-[#000] rounded w-full sm:w-[48%] sm:max-w-[600px] px-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[28px] font-semibold text-white">
                  {numberFormat(getTotalAmount) || 0}
                </p>
                <p className="text-white">Balance</p>
              </div>
              <BsFillEyeSlashFill color="white" size={27} />
            </div>
          </div>

          <div className="mt-7">
            <TransactionTable data={data} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Transaction;
