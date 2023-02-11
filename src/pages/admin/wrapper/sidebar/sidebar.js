import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./sidebar.css";

const menu = [
  { name: "Home", icon: <FiHome />, path: "/admin" },
  { name: "Orders", icon: <FiHome />, path: "/orders" },
  { name: "Transactions", icon: <FiHome />, path: "/transactions" },
  { name: "Logout", icon: <FiHome />, cb: null },
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
                <Link to={`${item.path}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
