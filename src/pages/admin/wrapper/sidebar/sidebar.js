import React from "react";
import { FiHome, FiLogOut } from "react-icons/fi";
import { FaPaperPlane, FaMoneyBillWaveAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./sidebar.css";

const menu = [
  { name: "Home", icon: <FiHome />, path: "/admin" },
  { name: "Orders", icon: <FaPaperPlane />, path: "/orders" },
  { name: "Transactions", icon: <FaMoneyBillWaveAlt />, path: "/transactions" },
  { name: "Logout", icon: <FiLogOut />, cb: null },
];

const Sidebar = () => {
  return (
    <div className="bg-[#000] h-[91vh] w-full">
      <div>
        <ul className="pt-1">
          {menu.map((item) => {
            return (
              <li className="pl-[12%] text-white flex items-center py-5 gap-x-[15px] cursor-pointer menu-list">
                {item.icon}
                <Link to={item.path && `${item.path}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
