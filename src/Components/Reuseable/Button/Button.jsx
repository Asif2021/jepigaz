import React from 'react'
import { Button } from 'antd'

const AppButton = ({type, className, icon, onClick, text, style}) => {
  return (
    <Button type={type} className={className} icon={icon} onClick={onClick} style={style} >{text}</Button>
  )
}

export default AppButton