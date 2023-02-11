import React, { useState } from "react";
import "./form.css";

const Orderform = ({ handleOpenForm }) => {
  const [formValues, setFormValues] = useState({
    product: "",
    order_no: "",
    location: "",
    status: "",
    address: "",
    id: "",
    amount: "",
    source: "",
  });

  const handleChange = (e) => {
    setFormValues((prev) => [...prev, { [e.target.name]: e.target.value }]);
  };

  return (
    <div className="w-full h-full p-4 fixed bg-[#00000050] flex justify-center items-center">
      <div className="bg-white rounded w-full max-w-[550px] mb-[40px] mr-[15%] h-[600px] py-3 px-5">
        <p className="text-[20px] font-medium">Create Order</p>

        <form className="mt-2">
          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Product"
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Order No"
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Location"
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Status"
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Address"
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="ID"
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Amount"
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Source"
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Date"
            type="date"
          />

          <div className="flex justify-end mt-3">
            <button
              onClick={handleOpenForm}
              className="text-sm bg-black text-white px-7 py-2 rounded cursor-pointer "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Orderform;
