import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./form.css";

const Orderform = ({
  handleOpenForm,
  handleChange,
  handleSubmit,
  formData,
  setFile,
  loading,
  perc,
  form,
}) => {
  return (
    <div className="w-full h-full p-4 fixed bg-[#00000050] flex justify-center items-center">
      <div className="bg-white rounded w-full max-w-[550px] mb-[40px] overflow-y-auto mr-[15%] h-[600px] py-3 px-5">
        <div className="flex justify-between w-full items-center">
          <p className="text-[20px] font-medium">Create Order</p>

          <AiOutlineClose
            size={30}
            onClick={handleOpenForm}
            className="cursor-pointer"
          />
        </div>

        <form className="mt-2" ref={form} id="myForm">
          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Full Name"
            name="name"
            // value={formData.product || ''}
            onChange={handleChange}
            id="name"
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Email Address"
            name="email"
            // value={formData.product || ''}
            onChange={handleChange}
            id="email"
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Product Name"
            name="product"
            // value={formData.product || ''}
            onChange={handleChange}
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Order No"
            name="orderNo"
            // value={formData.orderNo || ''}
            onChange={handleChange}
            id="orderNo"
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Source Location"
            name="location"
            // value={formData.location || ''}
            onChange={handleChange}
          />

          <select
            className="input rounded px-2 py-3 bg-transparent text w-full mt-3 outline-none"
            placeholder="Status"
            name="status"
            // value={formData.status || ''}
            onChange={handleChange}
          >
            <option >--choose status--</option>
            <option>Dispatched</option>
            <option>Shipped</option>
            <option>Arrived</option>
          </select>

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Destination"
            name="address"
            // value={formData.address || ''}
            onChange={handleChange}
          />

          {/* <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="ID"
            name="id"
            // value={formData.id || ''}
            onChange={handleChange}
            minLength="10"
            maxLength="10"
          /> */}

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Amount"
            name="amount"
            // value={formData.amount || ''}
            onChange={handleChange}
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Photo"
            name="photo"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            // value={formData.source || ''}
            accept="image/*"
          />

          <input
            className="input rounded px-2 py-2 w-full mt-3 outline-none"
            placeholder="Arrival Date"
            type="date"
            name="date"
            // value={formData.date || ''}
            onChange={handleChange}
          />

          <div className="flex justify-end mt-3">
            <button
              onClick={handleSubmit}
              className="text-sm bg-black text-white px-7 py-2 rounded cursor-pointer "
              disabled={(perc !== null && perc < 100) || loading}
            >
              {loading === true ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Orderform;
