import React from 'react'
import { Button } from 'antd'

const AppButton = ({type, className, icon, onClick, text}) => {
  return (
    <Button type={type} className={className} icon={icon} onClick={onClick} >{text}</Button>
  )
}

export default AppButton