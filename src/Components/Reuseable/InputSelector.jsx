import React from 'react'
import { Select } from 'antd';

const InputSelector = ({options, placeholder, className, onChange, defaultValue, value}) => {
  return (
    <Select
    // showSearch
    className={className}
    placeholder={placeholder}
    // optionFilterProp='children'
    suffixIcon={<img src="icons/chevron-down.svg" alt="" />}
    // filterOption={(input, option) => (option?.label ?? '').includes(input)}
    // filterSort={(optionA, optionB) =>
    //   (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    // }
    value={value}
    // options={options}
    onChange={onChange}
    // defaultValue={defaultValue}
  />
  )
}

export default InputSelector