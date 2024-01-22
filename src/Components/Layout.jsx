import React from 'react'
import { Layout } from 'antd'
import Navbar from './Shared/Navbar/Navbar'
import { Footer, Header } from 'antd/es/layout/layout'
import AppFooter from './Shared/Footer/Footer'

const AppLayout = () => {
  return (
    <Layout>
<Header className='bg-white shadow-md'>
    <Navbar/>
</Header>
<Footer className='p-0 bg-black md:px-12'>
    <AppFooter/>
</Footer>
    </Layout>
  )
}

export default AppLayout