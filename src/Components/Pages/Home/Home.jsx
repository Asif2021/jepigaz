import React from 'react'
import Typography from 'antd/es/typography/Typography'
import AdvanceFilter from './AdvanceFilter'
import ContactUs from './ContactUs'
import MostWantedCat from './MostWantedCat'

const Home = () => {
  return (
    <div className='bg-white pb-4 mx-4 md:mx-24'>
      <Typography className='text-3xl font-bold py-8'>
        New & Used Cars
      </Typography>
      <AdvanceFilter/>
      <div className='flex flex-col-reverse md:flex-row my-5 gap-5'>
          <ContactUs/>
          <MostWantedCat/>
      </div>
      </div>
  )
}

export default Home