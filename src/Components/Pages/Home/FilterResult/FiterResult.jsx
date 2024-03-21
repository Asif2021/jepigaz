import React from 'react'
import { Pagination, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import FilterData from './FilterData';
import FilterDataCard from './FilterDataCard';
import cardata from '../../../../../cardata.json'
import AppButton from '../../../Reuseable/Button/Button';


const FiterResult = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <Typography className="text-lg md:text-3xl font-bold flex items-center">
          <img src="./icons/arrow-left.svg" alt="arrowLeft" className="cursor-pointer" onClick={() => navigate("/")}/>
          Newest Cars
        </Typography>
        <img src="./icons/sort-alt.svg" alt="sort icon" className="cursor-pointer" />
      </div>

      <div className='flex flex-row gap-3'>
        <div className='hidden md:block w-[25%]'>
          <FilterData />
        </div>
        <div className='w-full md:w-[75%]'>
          {cardata.map((data) => {
            const { id, title, varient, year, type, milage, priceLowered, price, lowprice, bestPrice, topsearch, imageSource } = data;

            return <FilterDataCard key={id} id={id} title={title} varient={varient} year={year} type={type} milage={milage} priceLowered={priceLowered} price={price} lowprice={lowprice} bestPrice={bestPrice} topsearch={topsearch} imageSource={imageSource} />
          })}

          {/* pagination section */}
          <div className='flex justify-end'>
            <Pagination defaultCurrent={2} total={10} itemRender={(page, type) => {
              if (type === "next") {
                return <a>Next</a>
              } else if (type === 'pre') {
                return <a>pre</a>
              } else {
                return <a>{page}</a>
              }
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiterResult