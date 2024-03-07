import React, { useState } from "react";
import "../../Styles/Home.css";
import Typography from "antd/es/typography/Typography";
import AppButton from "../../Reuseable/Button/Button";
import InputField from "../../Reuseable/InputField";
import { Link } from "react-router-dom";
import InputSelector from "../../Reuseable/InputSelector";
import Caravan from "../../Reuseable/icons/Caravan";
import { useNavigate } from "react-router-dom";

const AdvanceFilter = () => {
  const [category, setCategory] = useState("car");
  const navigate = useNavigate();
  return (
    <div className="advanceFilter hidden md:block border border-solid border-[#E0E6F0] shadow-sm p-4 pt-0 rounded-md">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-2/4">
          <Typography className="text-lg font-bold  py-3">Category</Typography>
          <div className="grid grid-cols-5 gap-2 md:flex md:flex-row md:gap-3">
            <AppButton
              icon={category == 'car' ? <img src="/icons/sports-car2.svg" alt=""/> : <img src="/icons/sports-car.svg" alt=""/>}
              className={category == 'car' ? 'bg-black h-12' : 'h-12'}
              onClick={()=>setCategory('car')}/>
            <AppButton
              icon={category == 'motorcycle' ? <img src="/icons/motorcycle2.svg" alt=""/> :<img src="/icons/motorcycle.svg" alt="motorcycle"/>}
              className={category == 'motorcycle' ? 'bg-black h-12' : 'h-12'}
              onClick={()=>setCategory('motorcycle')}/>
            <AppButton
              icon={<img src="/icons/truck.svg" alt="" />}
              className={category == 'truck' ? 'bg-black h-12 colorchange' : 'h-12 '}
              onClick={()=>setCategory('truck')}/>
            <AppButton
              icon={<img src="/icons/campervan.svg" alt="" />}
              className={category == 'camprevan' ? 'bg-black h-12 colorchange' : 'h-12'}
              onClick={()=>setCategory('camprevan')}/>
            <AppButton
              icon={<Caravan fillColor={category === 'caravan' ? "#fff": "#90A3C4"}/>} 
              className={category === 'caravan' ? 'bg-black h-12' : 'h-12'}
              onClick={() => setCategory('caravan')}/>
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
              className="SearchBtn h-12 bg-[#1c819d]"
              icon={<img src="/icons/searchbtn.svg" alt="" />}
              style={{ width: "50px" }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between py-3">
        <Typography className="text-xl font-bold">Filter</Typography>
        <Link to="/advance-search" className="hidden text-lg font-medium sm:flex" style={{ color: "#1C819D" }}>
          Advanced search
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
          className="showResults h-12 w-full md:w-[32.5%] bg-[#1c819d] font-bold text-[15px]"
          type="primary"
          text="Show results"
        />
      </div>
    </div>
  );
};

export default AdvanceFilter;
