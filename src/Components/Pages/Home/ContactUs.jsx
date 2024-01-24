import { Typography, Flex } from 'antd'
import React from 'react'
import AppButton from '../../Reuseable/Button/Button'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <>
    <Flex className='social_link_buttons_mobile flex md:hidden w-full gap-3'>
        <AppButton icon={<img src='./icons/phone-theme.svg' alt='phone'/>} className="h-12 overflow-hidden bg-[#197b9c1f] "/>
        <AppButton icon={<img src='./icons/whatsapp-theme.svg' alt='whatsapp'/>} className="h-12 overflow-hidden bg-[#197b9c1f] "/>
        <AppButton icon={<img src='./icons/instagram-theme.svg' alt='instagram'/>} className="h-12 overflow-hidden bg-[#197b9c1f]"/>
     </Flex>

     <div className='p-5 rounded-md hidden md:block md:w-1/2' style={{ background: `url('icons/Group.svg') right no-repeat, black` }}>
            <Typography className='text-2xl text-white'>Sell your car quickly and for free!</Typography>
            <Typography className='text-[#DEDEDE]'>Provide car details, get a price estimate and find a buyer.</Typography>
            <Flex className="social_link_buttons flex flex-wrap mt-5">
                <AppButton type="link" icon={<img src='./icons/phone-icon.svg' alt='phone'/>} text="04 2270636" className="text-white font-bold text-lg flex justify-center items-center"/>
                <AppButton type="link" icon={<img src='./icons/whatsapp.svg' alt='whatsapp'/>} text="04 2270636" className="text-white font-bold text-lg flex justify-center items-center"/>
                <AppButton type="link" icon={<img src='./icons/instagram.svg' alt='instagram'/>} text="jepigaz" className="text-white font-bold text-lg flex justify-center items-center"/>
            </Flex>
    </div>  
    </>
  )
}

export default ContactUs