import React from 'react'
import { Layout } from 'antd'
import Navbar from './Shared/Navbar/Navbar'
import { Footer, Header, Content } from 'antd/es/layout/layout'
import AppFooter from './Shared/Footer/Footer'
import Home from './Pages/Home/Home'
import { Routes, Route } from "react-router-dom"

const AppLayout = () => {
  return (
    <Layout>
<Header className='bg-white shadow-md'>
    <Navbar/>
</Header>
<Content className='bg-white'>
<Routes>
<Route path="/" element={ <Home/> } />
</Routes>
</Content>
<Footer className='p-0 bg-black md:px-12'>
    <AppFooter/>
</Footer>
    </Layout>
  )
}

export default AppLayout