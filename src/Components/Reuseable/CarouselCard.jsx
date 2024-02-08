import React, { useState } from "react";
import { Carousel, Divider, Tag, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import AppButton from "./Button/Button";

const CarouselCard = () => {
  const [heartFilled, setHeartFilled] = useState(false);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div className="mycarousel, relative border border-solid shadow-md rounded-md border-[#E0E6F0] overflow-hidden pb-3">
        <Carousel afterChange={onChange} className="carouselCard">
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
        <div className="flex flex-col absolute right-1 top-1 gap-3">
          {heartFilled ? (
            <span className="bg-neutral-800 rounded-full flex justify-center items-center">
            <img
                src="./icons/heartfilled.svg"
                alt="heart"
                onClick={() => setHeartFilled(!heartFilled)}
              />
            </span>
          ) : (
            <span className="bg-neutral-800 rounded-full flex justify-center items-center">
            <img
                src="./icons/heart.svg"
                alt="heart"
                onClick={() => setHeartFilled(!heartFilled)}
              />
            </span>
          )}

          <span className="bg-neutral-800 p-1 rounded-full">
          
            <img src="./icons/share-2.svg" alt="share" />
          </span>
        </div>
        <div className="flex flex-row justify-between items-center px-2 py-2">
          <Typography className="font-bold text-xs md:text-base">
            Mercedez-BenzA 180
          </Typography>
          <Paragraph
            ellipsis
            symbol=".."
            className="font-semibold text-xs md:text-sm"
          >
            Classe A - V1
          </Paragraph>
        </div>
        <div className="flex flex-row items-center w-11 px-2 pb-2">
          <span className="">2023</span>
          <Divider type="vertical" />
          <span>Disele</span>
          <Divider type="vertical" />
          <span>99,999km</span>
        </div>
        <Tag className="mx-2 bg-violet-300 rounded-lg mb-2 text-violet-900">
          Price lowered
        </Tag>
        <div className="flex flex-row justify-between items-center px-2">
          <span className="flex justify-start">
            <Typography className="font-bold text-lg">$64987</Typography>
            <Typography className="line-through text-base">$64987</Typography>
          </span>
          <AppButton
            text="Contact"
            className="contact-button hover:bg-[#1c819d] border-solid border-[#1c819d] text-[#1c819d] hover:text-white font-semibold"
          />
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
