import React from 'react'
import { Input } from 'antd';

const InputField = ({placeholder, className, prefix, onChange}) => {
  return (<Input placeholder={placeholder} className={className} prefix={prefix}
    onChange={onChange} size='large'/>
  )
}

export default InputField