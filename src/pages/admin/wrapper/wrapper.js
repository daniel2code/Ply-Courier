import React, { useRef, useState } from "react";
import TopBar from "./topbar/topBar";
import Sidebar from "./sidebar/sidebar";

const Wrapper = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();

  const handleOpenMenu = async () => {
    await setMenu((prev) => !prev);

    const changeRef = (menuRef.current.style.display = menu ? "none" : "flex");
    const slide = (menuRef.current.style.right = !menu && "0px");
    // const transition = (menuRef.current.style.transition = !menu && "0.5s" );
  };

  return (
    <>
      <TopBar handleOpenMenu={handleOpenMenu} />
      <div className="flex w-full">
        <div
          className="bg-[#00000050] fixed sm:relative hidden lg:flex w-full right-[230px] lg:right-0 sm:w-fit sidebar"
          ref={menuRef}
        >
          <div className="w-[230px]">
            <Sidebar />
          </div>
        </div>

        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default Wrapper;
