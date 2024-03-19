import React, { useState } from 'react'
import InputSelector from '../../../Reuseable/InputSelector'
import AppButton from '../../../Reuseable/Button/Button'
import Typography from 'antd/es/typography/Typography'
import { Divider, Checkbox } from 'antd'
import '../../../Styles/AdvanceSearch.css'

const AdvanceFilterData = () => {
  const [bgcolor, setBgcolor] = useState("All");
  const [seller, setSeller] = useState("All");
  const [preOwner, setPreOwner] = useState("All");


  return (
    <div>
      <div className="flex flex-col gap-3 my-3">
        <InputSelector placeholder="Body type" className="h-10 w-full"/>
        <InputSelector placeholder="Fuel type" className="h-10 w-full"/>
        <InputSelector placeholder="Gear" className="h-10 w-full" />
      </div>
      <div className="w-full gap-3">
        <Typography className="uppercase font-bold">first registration</Typography>
        <div className="flex justify-between gap-3">
          <InputSelector placeholder="From" className="h-10 w-2/4" />
          <InputSelector placeholder="To" className="h-10 w-2/4" />
        </div>
      </div>
      <div className="w-full my-3">
        <Typography className="uppercase font-bold">Milage</Typography>
        <div className="flex justify-between gap-3">
          <InputSelector placeholder="From" className="h-10 w-2/4" />
          <InputSelector placeholder="To" className="h-10 w-2/4" />
        </div>
      </div>
      <div className="w-full">
        <div className='flex justify-between'><Typography className="uppercase font-bold">Power</Typography>
          <Typography className="uppercase font-bold">Kw <Divider type='vertical' /> Hp</Typography></div>
        <div className="flex justify-between gap-3">
          <InputSelector placeholder="From" className="h-10 w-2/4" />
          <InputSelector placeholder="To" className="h-10 w-2/4" />
        </div>
      </div>
      <div className="w-full my-5">
        <Typography className="uppercase font-bold">
          number of doors
        </Typography>
        <div className="flex justify-between gap-3">
          <AppButton
            text="All"
            onClick={() => setBgcolor("All")}
            className={bgcolor === "All" ? "bg-black text-white h-10 font-bold" : "h-10 font-bold "}
            style={{ width: "100px" }} />
          <AppButton
            text="2/3"
            onClick={() => setBgcolor("2/3")}
            className={bgcolor === "2/3" ? "bg-black text-white h-10 font-bold" : "h-10 font-bold "}
            style={{ width: "100px" }}/>
          <AppButton
            text="4/5"
            onClick={() => setBgcolor("3/5")}
            className={bgcolor === "3/5" ? "bg-black text-white h-10 font-bold" : "h-10 font-bold "}
            style={{ width: "100px" }} />
          <AppButton
            text="6/7"
            onClick={() => setBgcolor("6/7")}
            className={bgcolor === "6/7" ? "bg-black text-white h-10 font-bold" : "h-10 font-bold "}
            style={{ width: "100px" }}/>
        </div>
      </div>
      <div className="w-full my-5">
            <Typography className="uppercase font-bold">
              number of seats
            </Typography>
            <div className="flex justify-between gap-3">
              <InputSelector placeholder="From" className="h-10 w-2/4" />
              <InputSelector placeholder="To" className="h-10 w-2/4" />
            </div>
      </div>

          <Typography className="font-bold uppercase">Seller</Typography>
          <div className="flex justify-between">
            <AppButton
              text="All"
              onClick={() => setSeller("All")}
              className={seller === "All" ? "bg-black text-white h-10 font-bold" : "h-10 font-bold "}
              style={{ width: "110px" }}
            />
            <AppButton
              text="Dealer"
              onClick={() => setSeller("Dealer")}
              className={seller === "Dealer" ? "bg-black text-white h-10 font-bold": "h-10 font-bold "}
              style={{ width: "110px" }}
            />
            <AppButton
              text="Private"
              onClick={() => setSeller("Private")}
              className={seller === "Private" ? "bg-black text-white h-10 font-bold" : "h-10 font-bold "}
              style={{ width: "110px" }}/>
          </div>
          <Typography className="font-bold uppercase pt-5">
          Vehicle condition
        </Typography>
        <div className="flex flex-col">
          <Checkbox>New</Checkbox>
          <Checkbox>Antique</Checkbox>
          <Checkbox>Used</Checkbox>
          <Checkbox>Demonstration</Checkbox>
          <Checkbox>Employess Car</Checkbox>
          <Checkbox>Pre-Registered</Checkbox>
        </div>

        <div className="flex flex-col my-5">
            <Typography className="font-bold uppercase">
              previous owner
            </Typography>
            <div className=" flex justify-between gap-3">
              <AppButton 
                text="All"
                onClick={() => setPreOwner("All")}
                className={preOwner === "All" ? "bg-black text-white h-10 font-bold" : "h-10 font-bold "}
                style={{ width: "70px" }}/>
              <AppButton
                text="1"
                onClick={() => setPreOwner("1")}
                className={preOwner === "1" ? "bg-black text-white h-10 font-bold" : "h-10 font-bold "}
                style={{ width: "70px" }}/>
              <AppButton
                text="2"
                onClick={() => setPreOwner("2")}
                className={preOwner === "2" ? "bg-black text-white h-10 font-bold" : "h-10 font-bold "}
                style={{ width: "70px" }}/>
              <AppButton 
                text="3"
                onClick={() => setPreOwner("3")}
                className={preOwner === "3" ? "bg-black text-white h-10 font-bold" : "h-10 font-bold "}
                style={{ width: "70px" }}/>
              <AppButton
                text="4+"
                onClick={() => setPreOwner("4")}
                className={preOwner === "4" ? "bg-black text-white h-10 font-bold" : "h-10 font-bold "}
                style={{ width: "70px" }}/>
            </div>
          </div>
          <div className="w-full">
            <Typography className="font-bold uppercase">
              Had accident
            </Typography>
            <InputSelector placeholder="Don't Show" className="w-full h-10" />
          </div>
          <div className="pt-3 flex flex-col">
          <Checkbox>Guarantee</Checkbox>
          <Checkbox>With full service histroy</Checkbox>
          <Checkbox>non-smoking vehicles</Checkbox>
        </div>
        <div className="my-5">
          <Typography className="font-bold uppercase">
            Optional equipment
          </Typography>
          <div className="flex flex-col gap-3">
          <Checkbox className="my-checkbox">New</Checkbox>
          <Checkbox>Antique</Checkbox>
          <Checkbox>Used</Checkbox>
          <Checkbox>Demonstration</Checkbox>
          <Checkbox>Employess Car</Checkbox>
          <Checkbox>Pre-Registered</Checkbox>
          </div>
          <AppButton
            icon={<img src="./icons/plus.svg" alt="Plus" />}
            text="Show All"
            className="flex items-center p-0 text-base font-semibold text-[#1c819d] overflow-hidden shadow-none border-none"/>
        </div>

        <Typography className="font-bold uppercase">Body color</Typography>
        <div className="flex flex-wrap pr-10 gap-3 mb-3">
          <Checkbox className="black"></Checkbox>
          <Checkbox className="white"></Checkbox>
          <Checkbox className="silver"></Checkbox>
          <Checkbox className="belge"></Checkbox>
          <Checkbox className="violet"></Checkbox>
          <Checkbox className="green"></Checkbox>
          <Checkbox className="blue"></Checkbox>
          <Checkbox className="orange"></Checkbox>
          <Checkbox className="yellow"></Checkbox>
          <Checkbox className="brown"></Checkbox>
          <Checkbox className="bronze"></Checkbox>
          <Checkbox className="grey"></Checkbox>
          <Checkbox className="red"></Checkbox>
          <Checkbox className="gold"></Checkbox>
        </div>

        <Typography className="font-bold uppercase pt-5">Interior color</Typography>
        <div className="flex flex-wrap pr-10 gap-3 mb-3">
          <Checkbox className="belge"></Checkbox>
          <Checkbox className="blue"></Checkbox>
          <Checkbox className="brown"></Checkbox>
          <Checkbox className="bronze"></Checkbox>
          <Checkbox className="yellow"></Checkbox>
          <Checkbox className="grey"></Checkbox>
          <Checkbox className="green"></Checkbox>
          <Checkbox className="red"></Checkbox>
          <Checkbox className="black"></Checkbox>
          <Checkbox className="silver"></Checkbox>
          <Checkbox className="violet"></Checkbox>
          <Checkbox className="white"></Checkbox>
          <Checkbox className="red"></Checkbox>
          <Checkbox className="gold"></Checkbox>
        </div>

        <Typography className="font-bold uppercase pt-5">Upholstery</Typography>
        <div className="flex flex-col gap-3 mb-5">
          <Checkbox >Alcantaro</Checkbox>
          <Checkbox >Velour</Checkbox>
          <Checkbox >Part leather</Checkbox>
          <Checkbox >Full leather</Checkbox>
          <Checkbox >Cloth</Checkbox>
          <Checkbox >Other</Checkbox>
        </div>

       
        <Typography className="font-bold uppercase">environment</Typography>
        <div className="flex flex-col gap-3">
          <InputSelector placeholder="Euro Emission Class (at least)" className="h-10 w-full" />
          <InputSelector placeholder="Emission Label (at least)" className="h-10 w-full"/>
        <div className="flex items-center font-semibold"><Checkbox>Particular-filter</Checkbox>
      </div>
    </div>
     
    </div>
  )
}

export default AdvanceFilterData