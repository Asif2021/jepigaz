import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import {MenuOutlined} from '@ant-design/icons'

const OpenDrawers = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
     <MenuOutlined onClick={showDrawer}/>
   
      <Drawer title="Basic Drawer" placement="left" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default OpenDrawers;