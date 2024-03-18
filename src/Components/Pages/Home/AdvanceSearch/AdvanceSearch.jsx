import { Divider, Typography } from "antd";
import "../../../Styles/AdvanceSearch.css"
import React, { useState } from "react";
import AppButton from "../../../Reuseable/Button/Button";
import InputSelector from "../../../Reuseable/InputSelector";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { Slider } from "antd";
import { Checkbox } from "antd";
import CarComponent from "./CarComponent";

const AdvanceSearch = () => {
  const navigate = useNavigate();
  const [bgcolor, setBgcolor] = useState("All");
  const [seller, setSeller] = useState("All");
  const [preOwner, setPreOwner] = useState("All");
  const [components, setComponents] = useState([CarComponent]); 
  const [value, setValue] = useState([1800, 3500]);
  const [value2, setValue2] = useState([0, 10000]);
  

const handleAddComponent = () => {
  setComponents([...components, CarComponent]) 
}
const handleLessComponent = ()=>{
  setComponents((item)=>item.slice(0,-1)) 
}
const formatTooltipValue = (value) => {
  return `${value} $`;
};
const formatTooltipValue2 = (value) => {
  return `${value} km`;
};

const start = "$ " + value[0];
const end = "$ " + value[value.length - 1];

const start2 =  value2[0] + " km";
const end2 = value2[value2.length - 1] + " km";



  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <Typography className="text-lg md:text-3xl font-bold flex items-center">
          <img
            src="./icons/arrow-left.svg"
            alt="arrowLeft"
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
          Detaild Search
        </Typography>
        <AppButton
          text="Reject all"
          className="text-red-600 text-base font-bold border-none hover:text-red-600 shadow-none overflow-hidden"/>
          </div>

      {/* first part of the page starts here  */}
      <div className="max-w-[750px] mx-auto">
        <Typography className="font-bold uppercase">Car</Typography>

        {/* adding car component on button click */}
       {components.slice(0,3).map((item, i) => ( 
        <CarComponent key={i}/> ))}

       {/* switching add & less buttons on condition */}
          {(components.length===3) ? <AppButton
          onClick={handleLessComponent}
          icon={<img src="./icons/minus.svg" alt="minus" />}
          text="Less makes/models"
          className="flex items-center justify-center float-end p-0 text-xs md:text-base font-semibold text-[#1c819d] overflow-hidden border-none"/> :
          (components.length ===2) ? <div>
            <AppButton
          onClick={handleLessComponent}
          icon={<img src="./icons/minus.svg" alt="minus" />}
          text="Less makes/models"
          className="flex items-center float-end p-0 text-xs md:text-base font-semibold text-[#1c819d] overflow-hidden border-none"/>
           <AppButton
          onClick={handleAddComponent}
          icon={<img src="./icons/plus.svg" alt="Plus" />}
          text="Add more makes/models"
          className="flex items-center p-0 text-xs md:text-base font-semibold text-[#1c819d] overflow-hidden border-none"/>
          </div> :
          <AppButton
          onClick={handleAddComponent}
          icon={<img src="./icons/plus.svg" alt="Plus" />}
          text="Add more makes/models"
          className="flex items-center p-0 text-xs md:text-base font-semibold text-[#1c819d] overflow-hidden border-none"/>
          }
        
        
        <div className="flex flex-col md:flex-row w-full my-5 gap-3">
          <div className="w-full md:w-1/3 gap-3">
            <Typography className="uppercase font-bold">
              first registration
            </Typography>
            <div className="flex justify-between">
              <InputSelector placeholder="From" className="h-10 w-[48%]" />
              <InputSelector placeholder="To" className="h-10 w-[48%]" />
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <Typography className="uppercase font-bold">location</Typography>
            <InputSelector placeholder="Europe" className="h-10 w-full" />
          </div>
          <div className="w-full md:w-1/3">
            <Typography className="uppercase font-bold">
              place of import
            </Typography>
            <InputSelector placeholder="Country" className="h-10 w-full" />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-3 my-5">
          <div className="w-full md:w-1/2">
            <Typography className="uppercase font-bold">price</Typography>
            <div className="flex justify-between">
              <InputSelector placeholder="From" className="h-10 w-[48%]" value={start}
           />
              <InputSelector placeholder="To" className="h-10 w-[48%]" value={end} />
            </div>
            <Slider min={1000} max={5000} range defaultValue={value} 
            onChange={setValue} tooltip={{ open: true, placement:'bottom', formatter:formatTooltipValue }} 
            />
          </div>

          <div className="w-full md:w-1/2">
            <Typography className="uppercase font-bold">Mileage</Typography>
            <div className="flex justify-between">
              <InputSelector placeholder="From" className="h-10 w-[48%]"  value={start2} />
              <InputSelector placeholder="To" className="h-10 w-[48%]" value={end2} />
            </div>
            <Slider min={0} max={30000} range defaultValue={value2}
                  onChange={setValue2}  tooltip={{ open: true, placement:'bottom', formatter:formatTooltipValue2 } } />
          </div>
        </div>
      </div>

      <Divider
        type="horizontal"
        className="border-[#ffffff13] cursor-pointer"
      />

      {/* 2nd part of the page started here  */}

      <div className="max-w-[750px] mx-auto">
        <Typography className="uppercase font-bold">Basic Data</Typography>
        <div className="flex flex-col md:flex-row gap-3 my-3">
          <InputSelector
            placeholder="Body type"
            className="h-10 w-full md:w-1/3"
          />
          <InputSelector
            placeholder="Fuel type"
            className="h-10 w-full md:w-1/3"
          />
          <Select placeholder="Gear" className="h-10 w-full md:w-1/3" />
        </div>
        <div className="flex flex-col md:flex-row w-full my-5 gap-3">
          <div className="w-full md:w-1/3 gap-3">
            <Typography className="uppercase font-bold">Power</Typography>
            <div className="flex justify-between">
              <InputSelector placeholder="From" className="h-10 w-[48%]" />
              <InputSelector placeholder="To" className="h-10 w-[48%]" />
            </div>
          </div>
          <div className="w-full md:w-1/3 ">
            <Typography className="uppercase font-bold">
              number of doors
            </Typography>
            <div className="flex justify-between">
              <AppButton
                text="All"
                onClick={() => setBgcolor("All")}
                className={
                  bgcolor === "All"
                    ? "bg-black text-white h-10 font-bold"
                    : "h-10 font-bold "
                }
                style={{ width: "50px" }}
              />
              <AppButton
                text="2/3"
                onClick={() => setBgcolor("2/3")}
                className={
                  bgcolor === "2/3"
                    ? "bg-black text-white h-10 font-bold"
                    : "h-10 font-bold "
                }
                style={{ width: "50px" }}
              />
              <AppButton
                text="4/5"
                onClick={() => setBgcolor("3/5")}
                className={
                  bgcolor === "3/5"
                    ? "bg-black text-white h-10 font-bold"
                    : "h-10 font-bold "
                }
                style={{ width: "50px" }}
              />
              <AppButton
                text="6/7"
                onClick={() => setBgcolor("6/7")}
                className={
                  bgcolor === "6/7"
                    ? "bg-black text-white h-10 font-bold"
                    : "h-10 font-bold "
                }
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <Typography className="uppercase font-bold">
              number of seats
            </Typography>
            <div className="flex justify-between">
              <InputSelector placeholder="From" className="h-10 w-[48%]" />
              <InputSelector placeholder="To" className="h-10 w-[48%]" />
            </div>
          </div>
        </div>
        {/* Seller part */}
        <div>
          <Typography className="font-bold uppercase">Seller</Typography>
          <div className="flex gap-3">
            <AppButton
              text="All"
              onClick={() => setSeller("All")}
              className={
                seller === "All"
                  ? "bg-black text-white h-10 font-bold"
                  : "h-10 font-bold "
              }
              style={{ width: "100px" }}
            />
            <AppButton
              text="Dealer"
              onClick={() => setSeller("Dealer")}
              className={
                seller === "Dealer"
                  ? "bg-black text-white h-10 font-bold"
                  : "h-10 font-bold "
              }
              style={{ width: "100px" }}
            />
            <AppButton
              text="Private"
              onClick={() => setSeller("Private")}
              className={
                seller === "Private"
                  ? "bg-black text-white h-10 font-bold"
                  : "h-10 font-bold "
              }
              style={{ width: "100px" }}
            />
          </div>
        </div>
        <div className="my-5">
          <Typography className="font-bold uppercase">
            Optional equipment
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <Checkbox>4wd</Checkbox>
            <Checkbox>Adaptive Cruise Control</Checkbox>
            <Checkbox>Automatic climate control</Checkbox>
            <Checkbox>Abs</Checkbox>
            <Checkbox>Air Conditioning</Checkbox>
            <Checkbox>Cruise control</Checkbox>
          </div>
          <AppButton
            icon={<img src="./icons/plus.svg" alt="Plus" />}
            text="Show All"
            className="flex items-center p-0 text-base font-semibold text-[#1c819d] overflow-hidden shadow-none border-none"
          />
        </div>
      </div>
      <Divider
        type="horizontal"
        className="border-[#ffffff13] cursor-pointer"
      />

      {/* 3rd part of the apge started here  */}
      <div className="max-w-[750px] mx-auto">
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <div className="flex flex-col">
            <Typography className="font-bold uppercase">
              previous owner
            </Typography>
            <div className=" flex justify-between gap-3">
              <AppButton
                text="All"
                onClick={() => setPreOwner("All")}
                className={
                  preOwner === "All"
                    ? "bg-black text-white h-10 font-bold"
                    : "h-10 font-bold "
                }
                style={{ width: "70px" }}
              />
              <AppButton
                text="1"
                onClick={() => setPreOwner("1")}
                className={
                  preOwner === "1"
                    ? "bg-black text-white h-10 font-bold"
                    : "h-10 font-bold "
                }
                style={{ width: "70px" }}
              />
              <AppButton
                text="2"
                onClick={() => setPreOwner("2")}
                className={
                  preOwner === "2"
                    ? "bg-black text-white h-10 font-bold"
                    : "h-10 font-bold "
                }
                style={{ width: "70px" }}
              />
              <AppButton
                text="3"
                onClick={() => setPreOwner("3")}
                className={
                  preOwner === "3"
                    ? "bg-black text-white h-10 font-bold"
                    : "h-10 font-bold "
                }
                style={{ width: "70px" }}
              />
              <AppButton
                text="4+"
                onClick={() => setPreOwner("4")}
                className={
                  preOwner === "4"
                    ? "bg-black text-white h-10 font-bold"
                    : "h-10 font-bold "
                }
                style={{ width: "70px" }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Typography className="font-bold uppercase">
              Had accident
            </Typography>
            <InputSelector placeholder="Don't Show" className="w-full h-10" />
          </div>
        </div>
        <div className="pt-3">
          <Checkbox className="">Guarantee</Checkbox>
          <Checkbox>With full service histroy</Checkbox>
          <Checkbox>non-smoking vehicles</Checkbox>
        </div>
        <Typography className="font-bold uppercase pt-10">
          Vehicle condition
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Checkbox className="my-checkbox">New</Checkbox>
          <Checkbox>Used</Checkbox>
          <Checkbox>Employess Car</Checkbox>
          <Checkbox>Antique</Checkbox>
          <Checkbox>Demonstration</Checkbox>
          <Checkbox>Pre-Registered</Checkbox>
        </div>
      </div>
      <Divider
        type="horizontal"
        className="border-[#ffffff13] cursor-pointer"
      />

      {/* 4th part is pending for now  */}

      <div className="max-w-[750px] mx-auto">
        <Typography className="font-bold uppercase">Body color</Typography>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-3">
          <Checkbox className="belge">Belge</Checkbox>
          <Checkbox className="blue">Blue</Checkbox>
          <Checkbox className="brown">Brown</Checkbox>
          <Checkbox className="bronze">Bronze</Checkbox>
          <Checkbox className="yellow">Yellow</Checkbox>
          <Checkbox className="grey">Grey</Checkbox>
          <Checkbox className="green">Green</Checkbox>
          <Checkbox className="red">Red</Checkbox>
          <Checkbox className="black">Black</Checkbox>
          <Checkbox className="silver">Silver</Checkbox>
          <Checkbox className="violet">Violet</Checkbox>
          <Checkbox className="white">White</Checkbox>
          <Checkbox className="orange">Orange</Checkbox>
          <Checkbox className="gold">Gold</Checkbox>
        </div>
        <Typography className="font-bold uppercase pt-5">Interior color</Typography>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-3">
          <Checkbox className="belge">Beige</Checkbox>
          <Checkbox className="blue">Blue</Checkbox>
          <Checkbox className="brown">Brown</Checkbox>
          <Checkbox className="bronze">Bronze</Checkbox>
          <Checkbox className="yellow">Yellow</Checkbox>
          <Checkbox className="grey">Grey</Checkbox>
          <Checkbox className="green">Green</Checkbox>
          <Checkbox className="red">Red</Checkbox>
          <Checkbox className="black">Black</Checkbox>
          <Checkbox className="silver">Silver</Checkbox>
          <Checkbox className="violet">Violet</Checkbox>
          <Checkbox className="white">White</Checkbox>
        </div>
        <Typography className="font-bold uppercase pt-5">Upholstery</Typography>
        <div className="grid grid-cols-3 gap-3">
          <Checkbox >Alcantaro</Checkbox>
          <Checkbox >Velour</Checkbox>
          <Checkbox >Part leather</Checkbox>
          <Checkbox >Full leather</Checkbox>
          <Checkbox >Cloth</Checkbox>
          <Checkbox >Other</Checkbox>
          </div>
      </div>

      <Divider
        type="horizontal"
        className="border-[#ffffff13] cursor-pointer"
      />

      {/* 5th part starts here  */}
      <div className="max-w-[750px] mx-auto">
        <Typography className="font-bold uppercase">environment</Typography>
        <div className="flex flex-col md:flex-row gap-3">
          <InputSelector
            placeholder="Euro Emission Class (at least)"
            className="h-10 w-full md:w-1/3"
          />
          <InputSelector
            placeholder="Emission Label (at least)"
            className="h-10 w-full md:w-1/3"
          />
          <div className="flex items-center font-semibold">
            <Checkbox>Particular-filter</Checkbox>
          </div>
        </div>
      </div>
      <Divider
        type="horizontal"
        className="border-[#ffffff13] cursor-pointer"
      />
      {/* 6th part of the page starts here  */}
      <div className="max-w-[750px] mx-auto">
        <Typography className="font-bold uppercase">offer details</Typography>
        <div className="flex flex-col md:flex-row gap-3">
          <InputSelector
            placeholder="Onlince since"
            className="h-10 w-full md:w-1/3"
          />
          <div className="flex items-center font-semibold">
            <Checkbox>VAT deductible</Checkbox>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <AppButton
          text="Show results (123 456)"
          className="resultButton flex items-center text-base font-semibold text-[#fff] bg-[#1c819d] p-5"
        />
      </div>
    </div>
  );
};

export default AdvanceSearch;
