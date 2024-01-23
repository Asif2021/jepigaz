import Typography from 'antd/es/typography/Typography'
import AdvanceFilter from './AdvanceFilter'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-white pb-4 mx-24'>
      <Typography className='text-3xl font-bold py-8'>
        New & Used Cars
      </Typography>
      <AdvanceFilter/>
      </div>
  )
}

export default Home