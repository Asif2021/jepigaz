import React from "react";
import "../../Styles/Home.css";
import Typography from "antd/es/typography/Typography";
import AppButton from "../../Reuseable/Button/Button";
import InputField from "../../Reuseable/InputField";
import { Link } from "react-router-dom";
import InputSelector from "../../Reuseable/InputSelector";

const AdvanceFilter = () => {
  return (
    <div className="advanceFilter hidden sm:block border border-solid border-[#E0E6F0] shadow-sm p-4 rounded-md">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-2/4">
          <Typography className="text-lg font-bold  py-3">Category</Typography>
          <div className="flex gap-3">
            <AppButton
              icon={<img src="/icons/sports-car.svg" alt="" />}
              className="h-12"
            />
            <AppButton
              icon={<img src="/icons/motorcycle.svg" alt="" />}
              className="h-12"
            />
            <AppButton
              icon={<img src="/icons/truck.svg" alt="" />}
              className="h-12"
            />
            <AppButton
              icon={<img src="/icons/campervan.svg" alt="" />}
              className="h-12"
            />
            <AppButton
              icon={<img src="/icons/caravan.svg" alt="" />}
              className="h-12"
            />
          </div>
        </div>
        <div className="w-full md:w-2/4">
          <Typography className="text-lg font-bold py-3">Search</Typography>
          <div className="flex gap-3">
            <InputField
              placeholder="Search by name"
              prefix={<img src="/icons/search.svg" alt="" />}
              className="h-12"
            />
            <AppButton
              type="primary"
              className="SearchBtn h-12 bg-[#1c819d] overflow-hidden"
              icon={<img src="/icons/searchbtn.svg" alt="" />}
              style={{ width: "50px" }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between py-3">
        <Typography className="text-xl font-bold">Filter</Typography>
        <Link
          className="hidden text-lg font-medium sm:flex"
          style={{ color: "#1C819D" }}
        >
          Advanced search{" "}
          <img src="/icons/arrow-right.svg" alt="" className="ml-2" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <InputSelector
          className="h-12 w-full md:w-[32.5%]"
          placeholder="Make"
        />
        <InputSelector
          className="h-12 w-full md:w-[32.5%]"
          placeholder="Model"
        />
        <InputSelector
          className="h-12 w-full md:w-[32.5%]"
          placeholder="First registration"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between my-3 gap-3">
        <InputSelector
          className="h-12 w-full md:w-[32.5%]"
          placeholder="Country"
        />
        <InputSelector
          className="h-12 w-full md:w-[15.7%]"
          placeholder="Price from"
        />
        <InputSelector
          className="h-12 w-full md:w-[15.7%]"
          placeholder="Price to"
        />
        <AppButton
          className="showResults h-12 w-full md:w-[32.5%] bg-[#1c819d] overflow-hidden"
          type="primary"
          text="Show results"
        />
      </div>
    </div>
  );
};

export default AdvanceFilter;