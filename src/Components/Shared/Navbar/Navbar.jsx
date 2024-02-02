import "../../Styles/Navbar.css";
import React, { useState } from "react";
import { Menu, Select, Popover, Typography, Divider, Button } from "antd";
import AppButton from "../../Reuseable/Button/Button";
import Notification from "./Notification";
import notification from "../../../notification.json";

const items = [
  {
    label: "New & Used Cars",
    key: "new&usedCars",
  },
  {
    label: "Favorites",
    key: "favorites",
  },
  {
    label: "Info",
    key: "info",
  },
  {
    label: "Partners",
    key: "partners",
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("new&usedCars");
  const [data, setDate] = useState(notification);
 
  const selectMenu = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const changeLanguage = (value) => {
    console.log(`selected ${value}`);
  };

  const content = (
    <div className="w-[380px]">
      <Typography className="font-bold text-xl">Notifications</Typography>
      <div className="flex flex-row justify-between">
        <div>
          <AppButton
            type="link"
            text="All"
            className="p-0 text-black uppercase"
          />
          <Divider className="border-[#4F5968]" type="vertical" />
          <AppButton
            type="link"
            text="Unread"
            className="p-0 text-black uppercase"
          />
          <Divider className="border-[#4F5968]" type="vertical" />
          <AppButton
            type="link"
            text="Read"
            className="p-0 text-black uppercase"
          />
        </div>
        <AppButton
          type="link"
          text="Mark all as read"
          className="text-[#3A96AB] font-bold"
        />
      </div>
      <div>
        {data.map((notifi) => {
          const { id, title, lastSeen, description, status, imageSource } =
            notifi;
          return (
            <div key={id}>
              <Notification
                id={id}
                title={title}
                lastSeen={lastSeen}
                description={description}
                status={status}
                imageSource={imageSource}
              />
            </div>
          );
        })}
      </div>
      <div>
        <Button
          type="ghost"
          className="overflow-hidden w-full font-bold text-xl"
        >
          Showmore
          <img
            src="./icons/expand.png"
            alt="expand"
            className="ml-2 w-4 align-middle"
          />
        </Button>
      </div>
    </div>
  );
  return (
    <>
      {/* for mobile view  */}
      <div className="navbarmobile flex justify-between md:hidden mt-5">
        <img src="icons/menu.svg" alt="menu" />
        <img src="Logo1.svg" alt="logo1" />
        <img src="icons/bell.svg" alt="bell" />
        {/* <Popover
          content={content}
          placement="bottomRight"
          trigger="click"
          className="popover"
        >
          <img src="icons/bell.svg" alt="bell" />
        </Popover> */}
      </div>
      
      {/* for desktop view   */}
      <div className="navbar hidden md:flex flex-row items-center justify-between gap-4 max-w-[1100px] mx-auto">
        <div className="text-[22px]">
          <img src="./Logo1.svg" alt="logo" />
        </div>
        <Menu
          className="hidden md:flex w-full"
          onClick={selectMenu}
          selectedKeys={[current]}
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
            text="Sing in"
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
