import React, { useState } from "react";
import Typography from "antd/es/typography/Typography";
import AdvanceFilter from "./AdvanceFilter";
import ContactUs from "./ContactUs";
import MostWantedCat from "./MostWantedCat";
import AppButton from "../../Reuseable/Button/Button";
import CarouselCard from "../../Reuseable/CarouselCard";
import cardata from "../../../../cardata.json"
import { Button, Divider } from "antd";
import Link from "antd/es/typography/Link";

const Home = () => {
  const [showData, setShowData] = useState(4);
  const [showData2, setShowData2] = useState(4);

  const handleShowMore = () => {
    setShowData(showData + 4);
  }
  const handleShowMore2 = () => {
    setShowData2(showData2 + 4);
  }
  
  return (
    <div className="bg-white pb-4">
      <Typography className="text-3xl font-bold py-3">
        New & Used Cars
      </Typography>
      <AppButton text="Start search" className="searchFilterBtn block md:hidden w-full h-12 text-lg font-bold text-white hover:text-white bg-[#1c819d] my-3"/>
      <AdvanceFilter />
      <div className="flex flex-col-reverse md:flex-row my-5 gap-5 py-5">
        <ContactUs />
        <MostWantedCat />
      </div>
      <div className="flex justify-between">
      <Typography className='text-black text-xl font-semibold'>Newsest Cars</Typography>
      <Link className="showAllLink flex items-center gap-2 font-semibold text-lg">Show all <img src="./icons/arrow-right.svg" alt="right" /></Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
        {cardata.slice(0,showData).map((data)=>{
          const {id, title, varient, year, type, milage, priceLowered, price, lowprice, bestPrice, topsearch, imageSource } = data

          return <div key={id}>
            <CarouselCard cardata={data} id={id} title={title} varient={varient} year={year} type={type} milage={milage} priceLowered={priceLowered} price={price} lowprice={lowprice} bestPrice={bestPrice} topsearch={topsearch} imageSource={imageSource} />
          </div>
        })}
         </div>
         <Button className="flex justify-center items-center font-bold border-none shadow-none overflow-hidden w-full text-lg my-5" onClick={handleShowMore}>Show more {<img src='./icons/expand.png' alt="showmore" className="w-5 mt-1 ml-2" />}</Button>
         <Divider type="horizontal" />
         <div className="flex justify-between">
      <Typography className='text-black text-xl font-semibold'>Most wanted</Typography>
      <Link className="showAllLink flex items-center gap-2 font-semibold text-lg">Show all <img src="./icons/arrow-right.svg" alt="right" /></Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
        {cardata.slice(0,showData2).map((data)=>{
          const {id, title, varient, year, type, milage, priceLowered, price, lowprice, imageSource } = data

          return <div key={id}>
            <CarouselCard cardata={data} id={id} title={title} varient={varient} year={year} type={type} milage={milage} priceLowered={priceLowered} price={price} lowprice={lowprice} imageSource={imageSource} />
          </div>
        })}
         </div>
         <Button className="flex justify-center items-center font-bold border-none shadow-none overflow-hidden w-full text-lg my-5" onClick={handleShowMore2}>Show more {<img src='./icons/expand.png' alt="showmore" className="w-5 mt-1 ml-2" />}</Button>
      
    </div>
  );
};

export default Home;
