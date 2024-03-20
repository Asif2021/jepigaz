import React from 'react'
import { Carousel, Divider, Tag, Typography } from "antd";


const FilterDataCard = (data) => {
    const {id, title, varient, year, type, milage, priceLowered, price, lowprice, bestPrice, topsearch, imageSource } = data

    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    

  return (
    <div className='FilterDataCardCarousel flex flex-row rounded-md my-3 border border-solid border-[#E0E6F0]'>
        <div className='w-2/6'>
        <Carousel afterChange={onChange} className="carouselCard cursor-pointer" >
       {imageSource.map((image) => (
        <div key={id}>
          <img src={image} alt={image}  className="flex w-full" />
        </div>
      ))}
    
          
        </Carousel>
        </div>
        <div></div>
    </div>
  )
}

export default FilterDataCard