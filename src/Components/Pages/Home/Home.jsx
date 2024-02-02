import React from "react";
import Typography from "antd/es/typography/Typography";
import AdvanceFilter from "./AdvanceFilter";
import ContactUs from "./ContactUs";
import MostWantedCat from "./MostWantedCat";
import AppButton from "../../Reuseable/Button/Button";

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
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
