import React from 'react'
import InputSelector from '../../Reuseable/InputSelector'
import { Select } from "antd";

const CarComponent = () => {
  return (
        <div className="flex flex-col md:flex-row gap-3 my-3">
          <InputSelector placeholder="Make" className="h-10 w-full md:w-1/3" />
          <InputSelector placeholder="Model" className="h-10 w-full md:w-1/3" />
          <Select
            placeholder="Variant"
            className="h-10 w-full md:w-1/3"
            suffixIcon={null}
          />
        </div>
   
  )
}

export default CarComponent