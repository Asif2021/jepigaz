import React, { useState } from "react";
import { Carousel, Divider, Flex, Tag, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import AppButton from "./Button/Button";

const CarouselCard = (data) => {
  const [heartFilled, setHeartFilled] = useState(false);
  const {id, title, varient, year, type, milage, priceLowered, price, lowprice, imageSource } = data

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div className="mycarousel relative border border-solid shadow-md rounded-md border-[#E0E6F0] overflow-hidden pb-3">
        <Carousel afterChange={onChange} className="carouselCard cursor-pointer">
          <div className="rounded-md">
            <img
              src="./images/image1.png"
              alt="image"
              className="flex w-full"
            />
          </div>
          <div>
            <img
              src="./images/image2.png"
              alt="image"
              className="flex w-full"
            />
          </div>
          <div>
            <img
              src="./images/image3.png"
              alt="image"
              className="flex w-full"
            />
          </div>
          <div>
            <img
              src="./images/image4.png"
              alt="image"
              className="flex w-full"
            />
          </div>
        </Carousel>
        <div className="flex flex-col absolute right-1 top-1 gap-1">
          {heartFilled ? (<span className="bg-slate-700 bg-opacity-65 w-8 rounded-full h-8  flex justify-center items-center">
            <img src="./icons/heartfilled.svg" alt="heart" onClick={() => setHeartFilled(!heartFilled)}/></span>) :
            (<span className="bg-slate-700 bg-opacity-65 h-8 w-8 rounded-full flex justify-center items-center"> <img src="./icons/heart.svg"
                alt="heart"
                onClick={() => setHeartFilled(!heartFilled)}
              />
            </span>
          )}

          <span className="bg-slate-700 bg-opacity-65 rounded-full h-8 w-8 flex justify-center items-center">
            <img src="./icons/share-2.svg" alt="share" />
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
        {priceLowered ? <Tag className="mx-2 bg-[#F2F8F9] rounded-lg mb-2 text-[#61B4E7] border-none font-bold">
        price lowered
        </Tag> : ""  }
        
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
