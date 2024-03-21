import React, {useState} from 'react'
import { Carousel, Divider, Tag, Typography } from "antd";
import AppButton from '../../../Reuseable/Button/Button';


const FilterDataCard = (data) => {
  const [heartFilled, setHeartFilled] = useState(false);

    const {id, title, varient, year, type, milage, priceLowered, price, lowprice, bestPrice, topsearch, imageSource } = data

    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    

  return (
    <div className='FilterDataCardCarousel flex flex-row my-3 rounded-md border-[2px] border-solid border-[#E0E6F0]'>
        <div className='w-2/6'>
        <Carousel afterChange={onChange} className="carouselCard cursor-pointer" >
          {imageSource.map((image) => (
            <div key={id}>
              <img src={image} alt={image}  className="flex w-full rounded-l-md" />
            </div>
            ))}
        </Carousel>
        </div>

        <div className='w-4/6'>
          <div className='flex flex-row justify-between mt-3 mx-3'>
          <Typography className='font-semibold text-xs md:text-sm'>VolksvagonTaigo 1.0 TSI 95 CV life</Typography>
              <div className='flex flex-row relative'>
                    {(priceLowered === true) ? <Tag className="mx-2 bg-[#F2F8F9] rounded-lg mb-2 text-[#61B4E7] border-none font-bold">
                    price lowered
                    </Tag> : (bestPrice === true) ? <Tag className="mx-2 bg-[#f1c5c5] rounded-lg mb-2 text-red-700 border-none font-bold">
                    Best Price
                    </Tag> : (topsearch === true) ? <Tag className="mx-2 bg-[#F2F8F9] rounded-lg mb-2 text-[#4eaeea] border-none font-bold">
                    Top search
                    </Tag>: <Tag className="mx-2 bg-[#F2F8F9] rounded-lg mb-2 text-[#61B4E7] invisible border-none font-bold">
                    price lowered
                    </Tag>  }
                    <Typography className="font-bold text-xs md:text-lg"> ${price}</Typography>
                    <div className="flex flex-row">
                      {heartFilled ? (<span className="bg-transparent-65 w-6 md:w-8 rounded-full h-6 md:h-8  flex justify-center items-center">
                        <img src="./icons/heartfilled2.svg" alt="heart" className="w-5 md:w-6" onClick={() => setHeartFilled(!heartFilled)}/></span>) :
                        (<span className="h-6 md:h-8 w-6 md:w-8 rounded-full flex justify-center items-center"> <img src="./icons/heart-2.svg"
                            alt="heart" className="w-5 md:w-6"
                            onClick={() => setHeartFilled(!heartFilled)}
                          />
                        </span>
                      )}

                    <span className="rounded-full h-6 md:h-8 w-6 md:w-8 flex justify-center items-center">
                      <img src="./icons/share.svg" className="w-5 md:w-6" alt="share" />
                    </span>
                </div>
             </div>
          </div>
         
            <div className="font-semibold text-[#4F5968] mx-3">
              <span className="inline-flex">{year}</span>
              <Divider type="vertical" />
              <span className="inline-flex">{type}</span>
              <Divider type="vertical" />
              <span className="inline-flex">{milage}</span>
              <Divider type="vertical" />
              <span className="inline-flex">160Hp</span>
              <Divider type="vertical" />
              <span className="inline-flex">Menual</span>
              <Divider type="vertical" />
              <span className="inline-flex">7.21km</span>
            </div>
            <div className='flex justify-between mt-12 mx-3'>
           <span className='flex justify-center items-center gap-1'> <img src="./icons/map-pin.svg" alt="map" /><Typography className='text-xs md:text-lg'>City Name</Typography></span>
            <AppButton
            text="Contact"
            className="contact-button hover:bg-[#1c819d] border-solid border-[#1c819d] text-[#1c819d] hover:text-white font-semibold hidden md:block"/>
            </div>
        </div>
      </div>
  )
}

export default FilterDataCard