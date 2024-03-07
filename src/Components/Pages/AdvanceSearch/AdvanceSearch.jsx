import {  Divider, Typography } from 'antd'
import React, { useState } from 'react'
import AppButton from '../../Reuseable/Button/Button'
import InputSelector from '../../Reuseable/InputSelector'
import {Select} from 'antd'
import { useNavigate } from "react-router-dom";
import { Slider } from 'antd';


const AdvanceSearch = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
    <div className='flex justify-between items-center py-5'>
        <Typography className='text-3xl font-bold'> <img src="./icons/arrow-left.svg" alt="arrowLeft" className='cursor-pointer'  onClick={()=>(navigate("/"))} /> Detaild Search</Typography>
        <AppButton text='Reject all' className="text-red-600 text-base font-bold border-none hover:text-red-600 shadow-none overflow-hidden"/>
    </div>
    <div className='max-w-[750px] mx-auto'>
    <Typography className='font-bold uppercase'>Car</Typography>
    <div className='flex flex-col md:flex-row gap-3 my-3'>
        <InputSelector placeholder="Make" className="h-10 w-full md:w-1/3"/>
        <InputSelector placeholder="Model" className="h-10 w-full md:w-1/3"/>
        <Select placeholder="Variant" className="h-10 w-full md:w-1/3" suffixIcon={null}/>
    </div>
    <AppButton icon={<img src="./icons/plus.svg" alt="Plus" /> } text="Add more makes/models" className='flex items-center text-base font-semibold text-[#1c819d] overflow-hidden border-none'/>

    <div className='flex flex-col md:flex-row w-full my-5 gap-3'>
      <div className='w-full md:w-1/3 gap-3'>
        <Typography className='uppercase font-bold'>first registration</Typography>
        <div className='flex justify-between'>
        <InputSelector placeholder="From" className="h-10 w-[48%]"/>
        <InputSelector placeholder="To" className="h-10 w-[48%]"/>
        </div>
      </div>
      <div className='w-full md:w-1/3'>
        <Typography className='uppercase font-bold'>location</Typography>
        <InputSelector placeholder="Europe" className="h-10 w-full"/>
      </div>
      <div className='w-full md:w-1/3'>
        <Typography className='uppercase font-bold'>place of import</Typography>
        <InputSelector placeholder="Country" className="h-10 w-full"/>
      </div>
    </div>
    <div className='w-full flex flex-col md:flex-row gap-3 my-5'>
      <div className='w-full md:w-1/2'>
        <Typography className='uppercase font-bold'>price</Typography>
        <div className='flex justify-between'>
        <InputSelector placeholder="From" className="h-10 w-[48%]"/>
        <InputSelector placeholder="To" className="h-10 w-[48%]"/>
        </div>
        <Slider defaultValue={30} tooltip={{ open: true }} />
      </div>
      
      <div className='w-full md:w-1/2'>
        <Typography className='uppercase font-bold'>price</Typography>
        <div className='flex justify-between'>
        <InputSelector placeholder="From" className="h-10 w-[48%]"/>
        <InputSelector placeholder="To" className="h-10 w-[48%]"/>
        </div>
        <Slider defaultValue={30} tooltip={{ open: true }} />
      </div>
      </div>
    </div>
    <Divider type='vertical'/>
    </div>
  )
}

export default AdvanceSearch