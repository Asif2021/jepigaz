import React from 'react'
import {  Typography } from "antd";
import { useNavigate } from "react-router-dom";
import FilterData from './FilterData';
import FilterDataCard from './FilterDataCard';
import cardata from '../../../../../cardata.json'


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
        <div className='flex flex-row gap-3'>
            <div className='hidden md:block md:w-1/3'>
                    <FilterData/>
            </div>
            <div className='w-full md:w-2/3'>
              {cardata.map((data)=>{
                  const {id, title, varient, year, type, milage, priceLowered, price, lowprice, bestPrice, topsearch, imageSource } = data;

                return <FilterDataCard id={id} title={title} varient={varient} year={year} type={type} milage={milage} priceLowered={priceLowered} price={price} lowprice={lowprice} bestPrice={bestPrice} topsearch={topsearch} imageSource={imageSource}/>
              })}
            </div>
        </div>
    </div>
  )
}

export default FiterResult