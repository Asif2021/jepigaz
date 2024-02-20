import React, { useState } from "react";
import { Carousel, Divider, Flex, Tag, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import AppButton from "./Button/Button";

const CarouselCard = (data) => {
  const [heartFilled, setHeartFilled] = useState(false);
  const {id, title, varient, year, type, milage, priceLowered, price, lowprice, bestPrice, topsearch, imageSource } = data

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div className="mycarousel relative border border-solid shadow-md rounded-md border-[#E0E6F0] overflow-hidden pb-3">
        <Carousel afterChange={onChange} className="carouselCard cursor-pointer" >
       
      {imageSource.map((image) => (
        <div key={id}>
          <img src={image} alt={image}  className="flex w-full" />
        </div>
      ))}
    
          
        </Carousel>
        <div className="flex flex-col absolute right-1 top-1 gap-2">
          {heartFilled ? (<span className="bg-slate-700 bg-opacity-65 w-6 md:w-8 rounded-full h-6 md:h-8  flex justify-center items-center">
            <img src="./icons/heartfilled.svg" alt="heart" className="w-5 md:w-6" onClick={() => setHeartFilled(!heartFilled)}/></span>) :
            (<span className="bg-slate-700 bg-opacity-65 h-6 md:h-8 w-6 md:w-8 rounded-full flex justify-center items-center"> <img src="./icons/heart.svg"
                alt="heart" className="w-5 md:w-6"
                onClick={() => setHeartFilled(!heartFilled)}
              />
            </span>
          )}

          <span className="bg-slate-700 bg-opacity-65 rounded-full h-6 md:h-8 w-6 md:w-8 flex justify-center items-center">
            <img src="./icons/share-2.svg" className="w-5 md:w-6" alt="share" />
          </span>
        </div>
        
        <div className="flex flex-row justify-between items-center px-2 py-2 gap-[1px]">
          <Typography className="font-bold text-xs md:text-sm">
           {title}
          </Typography>
          <Paragraph
            ellipsis
            symbol=".."
            className="font-semibold text-xs md:text-sm"
          >
           {varient}
          </Paragraph>
        </div>
        <div className=" px-2 font-semibold pb-2 text-[#4F5968]">
          <span className="inline-flex">{year}</span>
          <Divider type="vertical" />
          <span className="inline-flex">{type}</span>
          <Divider type="vertical" />
          <span className="inline-flex">{milage}</span>
        </div>
        {(priceLowered === true) ? <Tag className="mx-2 bg-[#F2F8F9] rounded-lg mb-2 text-[#61B4E7] border-none font-bold">
        price lowered
        </Tag> : (bestPrice === true) ? <Tag className="mx-2 bg-[#f1c5c5] rounded-lg mb-2 text-red-700 border-none font-bold">
        Best Price
        </Tag> : (topsearch === true) ? <Tag className="mx-2 bg-[#F2F8F9] rounded-lg mb-2 text-[#4eaeea] border-none font-bold">
        Top search
        </Tag>: <Tag className="mx-2 bg-[#F2F8F9] rounded-lg mb-2 text-[#61B4E7] invisible border-none font-bold">
        price lowered
        </Tag>  }
      
        <div className="flex flex-row justify-between items-center px-2">
          <span className="flex justify-start items-center">
            <Typography className="font-bold text-xs md:text-lg"> ${price}</Typography>
            {
            priceLowered ? <Typography className="line-through text-xs md:text-base">${lowprice}</Typography>: ""
            }
          </span>
          <AppButton
            text="Contact"
            className="contact-button hover:bg-[#1c819d] border-solid border-[#1c819d] text-[#1c819d] hover:text-white font-semibold hidden md:block"
          />
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
