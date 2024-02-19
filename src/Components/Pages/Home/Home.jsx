import React from "react";
import Typography from "antd/es/typography/Typography";
import AdvanceFilter from "./AdvanceFilter";
import ContactUs from "./ContactUs";
import MostWantedCat from "./MostWantedCat";
import AppButton from "../../Reuseable/Button/Button";
import CarouselCard from "../../Reuseable/CarouselCard";
import cardata from "../../../../cardata.json"

const Home = () => {
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
      <Typography className='text-black text-xl font-semibold'>Newsest Cars</Typography>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
        {cardata.map((data)=>{
  const {id, title, varient, year, type, milage, priceLowered, price, lowprice, imageSource } = data

          return <div key={id}>
            <CarouselCard cardata={data} id={id} title={title} varient={varient} year={year} type={type} milage={milage} priceLowered={priceLowered} price={price} lowprice={lowprice} imageSource={imageSource} />
          </div>
        })}
         </div>
    </div>
  );
};

export default Home;
