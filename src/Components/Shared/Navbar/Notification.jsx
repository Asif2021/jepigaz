import React from "react";
import { Typography  } from "antd";
import Paragraph from "antd/es/typography/Paragraph";


const Notification = ({id, title, lastSeen, description, status, imageSource}) => {
  return (
    <div className="mypopover flex flex-row">
      <div className="w-[30%]">
      <img src={imageSource} alt="image" width={100} />
      </div>
   
    <div className="left_part flex flex-col w-[65%]">
      <div className="flex justify-between flex-row"> 
      <div><Typography>{title}</Typography></div>
       <div><Typography>{lastSeen}</Typography></div>
       </div>
       <Paragraph ellipsis={{rows: 2, symbol:''}}>{description}</Paragraph>
    </div>
    </div>
  );
};

export default Notification;
