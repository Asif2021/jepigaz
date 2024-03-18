import React from 'react'
import InputSelector from '../../../Reuseable/InputSelector'
import Typography from 'antd/es/typography/Typography'

const FilterData = () => {
  return (
    <div>
        <div className="flex flex-col gap-3 my-3">
            <Typography className='font-bold capitalize'>Filter</Typography>
          <InputSelector placeholder="Make" className="h-10 w-full " />
          <InputSelector placeholder="Model" className="h-10 w-full " />
        </div>
        <Typography className="uppercase font-bold">year</Typography>
            <div className="flex justify-between">
              <InputSelector placeholder="From" className="h-10 w-[48%]" />
              <InputSelector placeholder="To" className="h-10 w-[48%]" />
            </div>
    </div>
  )
}

export default FilterData