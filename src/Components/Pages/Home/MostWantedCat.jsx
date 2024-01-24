import { Typography } from 'antd'
import React from 'react'
import AppButton from '../../Reuseable/Button/Button'

const MostWantedCat = () => {
  return (
    <div className='block border border-solid border-[#E0E6F0] text-[#4F5968] rounded-md w-full md:w-2/4 p-5 '>
        <Typography className='text-[#4F5968] uppercase'>Most Wanted Categories</Typography>
        <div className='mostWanted grid grid-cols-4 md:grid-cols-4 w-full mt-2 gap-3'>
          <div> <AppButton icon={<img src='icons/family-car.svg' className='w-1/2 sm:w-1/2 md:w-full' alt='family-car'/>} className='h-10 sm:h-16 md:h-16 bg-[#197b9c1f] overflow-hidden' style={{width:'100%'}}/> <Typography className='text-center'>Family Car</Typography></div>
          <div> <AppButton icon={<img src='icons/city-car.svg' className='w-1/2 sm:w-1/2 md:w-3/4' alt='family-car'/>}  className='h-10 sm:h-16 md:h-16 bg-[#197b9c1f] overflow-hidden' style={{width:'100%'}}/> <Typography className='text-center'>City Car</Typography></div>
          <div> <AppButton icon={<img src='icons/electric-car.svg' className='w-1/2 sm:w-1/2 md:w-full' alt='family-car'/>} className='h-10 sm:h-16 md:h-16 bg-[#197b9c1f] overflow-hidden' style={{width:'100%'}}/> <Typography className='text-center'>Electric Car</Typography></div>
          <div> <AppButton icon={<img src='icons/luxury-car.svg' className='w-1/2 sm:w-1/2 md:w-full' alt='family-car'/>} className='h-10 sm:h-16 md:h-16 bg-[#197b9c1f] overflow-hidden' style={{width:'100%'}}/> <Typography className='text-center'>Luxury Car</Typography></div>
        </div>
    </div>
  )
}

export default MostWantedCat