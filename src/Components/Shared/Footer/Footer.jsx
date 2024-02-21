import Typography from "antd/es/typography/Typography";
import React from "react";
import AppButton from "../../Reuseable/Button/Button";
import "../../Styles/Footer.css";
import { Button, Divider, Flex } from "antd";
import Title from "antd/es/typography/Title";

const AppFooter = () => {
  return (
    <div className="AppFooter p-0 md:pl-6">
      <div className="bg-black flex flex-col md:flex-row w-full p-5 relative">
        <div className="w-full md:w-1/4 mb-5 md:ml-5">
          <img src="Logo 4.svg" alt="logo" className="mb-3" />
          <Typography className="text-white font-bold">
            Sell your car for quickly and for free!
          </Typography>
          <Typography className="text-white text-[#ffffff99]">
            Provide car details, get a price estimate and find a buyer
          </Typography>
          <Flex className="absolute top-2 right-2 md:static gap-2 mt-3">
            <AppButton
              type="link"
              icon={<img src="./icons/android.svg" alt="android" />}
            />
            <AppButton
              type="link"
              icon={<img src="./icons/apple.svg" alt="apple" />}
            />
          </Flex>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full md:w-3/4 md:pl-8">
          <div className="hidden md:flex flex-col gap-2">
            <Typography className="text-[#ffffff99]">lorem ipsum</Typography>
            <Typography className="text-white">Lorem ipsum dolor</Typography>
            <Typography className="text-white">
              Lorem ipsum dolor sit amet
            </Typography>
            <Typography className="text-white">
              Lorem ipsum dolor sit
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography className="text-[#ffffff99]">lorem ipsum</Typography>
            <Typography className="text-white">
           
              Lorem ipsum dolor sit
            </Typography>
            <Typography className="text-white">Lorem ipsum dolor</Typography>
            <Typography className="text-white">
           
              Lorem ipsum dolor sit amet
            </Typography>
            <Typography className="text-white">
              Lorem ipsum dolor sit
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography className="text-[#ffffff99]">lorem ipsum</Typography>
            <Typography className="text-white">
              Lorem ipsum dolor sit
            </Typography>
            <Typography className="text-white">Lorem ipsum dolor</Typography>
            <Typography className="text-white">
              Lorem ipsum dolor sit amet
            </Typography>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center">
        <Divider className="border-[#ffffff33]" />
      </div>
      <Typography className="text-white text-center  pb-3">
        ©Copyright 2023
      </Typography>
    </div>
  );
};

export default AppFooter;
