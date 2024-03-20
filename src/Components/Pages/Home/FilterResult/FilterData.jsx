import React, {useState} from 'react'
import InputSelector from '../../../Reuseable/InputSelector'
import Typography from 'antd/es/typography/Typography'
import { Slider, Button} from "antd";
import AppButton from '../../../Reuseable/Button/Button';
import AdvanceFilterData from './AdvanceFilterData';


const FilterData = () => {
  const [value, setValue] = useState([100, 2500]);
  const [showmore, setShowmore] = useState(false);

  return (
    <div>
        <div className="flex flex-col gap-3 mb-3">
            <Typography className='font-bold capitalize'>Filter</Typography>
          <InputSelector placeholder="Make" className="h-10 w-full " />
          <InputSelector placeholder="Model" className="h-10 w-full " />
        </div>
        <Typography className="uppercase font-bold">year</Typography>
            <div className="flex justify-between mb-5">
              <InputSelector placeholder="From" className="h-10 w-[48%]" />
              <InputSelector placeholder="To" className="h-10 w-[48%]" />
            </div>
        <Typography className="uppercase font-bold">Price</Typography>
            <div className="flex justify-between">
              <InputSelector placeholder="From" className="h-10 w-[48%]" value={"$ " + value[0]}/>
              <InputSelector placeholder="To" className="h-10 w-[48%]" value={"$ " + value[value.length - 1]} />
            </div>
            <Slider min={100} max={5000} range defaultValue={value} 
            onChange={setValue} tooltip={{ open: true, placement:'bottom', formatter:(value)=>(`${value} $`) }}/>
            <div className="w-full mt-10">
            <Typography className="uppercase font-bold">location</Typography>
            <InputSelector placeholder="Country" className="h-10 w-full" />
          </div>
          <AppButton
          text="Show results (123 456)"
          className="resultButton flex w-full mt-3 justify-center items-center text-base font-semibold text-[#fff] bg-[#1c819d] p-5"/>
          {showmore ? <Button onClick={()=>setShowmore(!showmore)} className="flex justify-center items-center font-bold border-none shadow-none overflow-hidden w-full text-lg my-5">Show less{<img src='./icons/showless.png' alt="showmore" className="w-5 mt-1 ml-2" />}</Button> : <Button onClick={()=>setShowmore(!showmore)} className="flex justify-center items-center font-bold border-none shadow-none overflow-hidden w-full text-lg my-5">Advance Filter{<img src='./icons/expand.png' alt="showmore" className="w-5 mt-1 ml-2" />}</Button> }
          {showmore ? <AdvanceFilterData/> : " "}
          
          
    </div>
  )
}

export default FilterData