import React from 'react'
import {  Typography } from "antd";
import { useNavigate } from "react-router-dom";
import FilterData from './FilterData';


const FiterResult = () => {
  const navigate = useNavigate();

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
         Newest Cars
        </Typography>
        <img
            src="./icons/sort-alt.svg"
            alt="sort icon"
            className="cursor-pointer"
            />
        </div>
        <div>
            <div className='hidden md:block md:w-1/3'>
                    <FilterData/>
            </div>
            <div className='w-full md:w-2/3'></div>
        </div>
    </div>
  )
}

export default FiterResult