import React, { useState } from "react";
import "../../Styles/Navbar.css";
import { Menu, Select } from "antd";
import AppButton from "../../Reuseable/Button/Button";
import { useNavigate, Link } from "react-router-dom";


const items = [
  {
    label: "New & Used Cars",
    key: "new&usedCars",
    path: '/'
  },
  {
    label: "Favorites",
    key: "favorites",
    path: '/favourites'
  },
  {
    label: "Info",
    key: "info",
    path: '/info'
  },
  {
    label: "Partners",
    key: "partners",
    path: '/partners'
  },
].map((item, index) => {
  return {
    key: index,
    label: <Link to={item.path}>{item.label}</Link>,
  };
});

const Navbar = () => {
  const [current, setCurrent] = useState("new&usedCars");
  const navigate = useNavigate();


  const changeLanguage = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      {/* for mobile view  */}
      <div className="navbarmobile flex justify-between md:hidden mt-5">
        <img src="icons/menu.svg" alt="menu" />
        <img src="Logo1.svg" alt="logo1" />
        <img src="icons/bell.svg" alt="bell" />
      </div>

      {/* for desktop view   */}
      <div className="navbar hidden md:flex flex-row items-center justify-between gap-4 max-w-[1100px] mx-auto">
        <div className="text-[22px]">
          <img src="./Logo1.svg" alt="logo" />
        </div>
        <Menu
          className="hidden md:flex w-full"
          defaultSelectedKeys={["0"]}
          mode="horizontal"
          items={items}
        />
        <div className="flex flex-row items-center gap-3">
          <Select
            defaultValue="English"
            className="langSelect"
            style={{
              width: 95,
            }}
            onChange={changeLanguage}
            options={[
              {
                value: "english",
                label: "English",
              },
              {
                value: "french",
                label: "French",
              },
              {
                value: "german",
                label: "German",
              },
            ]}
          />
          <AppButton
            type="primary"
            className="signinbtn bg-[#3A96AB] hover:bg-[#3A96AB] w-24 font-[600]"
            text="Sign in"
          />
          <AppButton
            className="sellAcarBtn text-[#3A96AB] border-[#3A96AB] font-bold"
            text="Sell a car"
          />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
