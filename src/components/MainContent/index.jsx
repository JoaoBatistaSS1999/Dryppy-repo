import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import banner from "../../assets/images/banner.png";
import Header from "../Header";

const Main = () => {
  return (
    <div className="">
      <Header />
      <div className="w-full flex justify-center ">
        <div className="max-w-screen-lg w-full">
          <div className="mt-5 ">
            <img src={banner} alt="banner" />
          </div>
          <nav className="mt-2">
            <ul className="bg-black text-white flex w-full h-14 items-center">
              <NavLink end to="/">
                <li className="hover:bg-blue-900 cursor-pointer h-full flex justify-center items-center w-32 p-4">
                  HOME
                </li>
              </NavLink>

              <NavLink to="/trade">
                <li className="hover:bg-blue-900 cursor-pointer h-full flex justify-center items-center w-32 p-4">
                  TRADE
                </li>
              </NavLink>

              <NavLink to="/farms">
                <li className="hover:bg-blue-900 cursor-pointer h-full flex justify-center items-center w-32 p-4">
                  FARMS
                </li>
              </NavLink>

              <NavLink to="/staking">
                <li className="hover:bg-blue-900 cursor-pointer h-full flex justify-center items-center w-32 p-4">
                  STAKING
                </li>
              </NavLink>
            </ul>
          </nav>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
