import { useContext, useState,useEffect } from "react";
import { myContext } from "../Contexts/mycontext";
import Select from 'react-select'

const AlarmPopup = () => {
    const {alarmSound,setisplaying} = useContext(myContext)
  return (
    <div className="bg-white w-full">
        <div className="bg-[#0090dd] flex flex-col justify-between items-center w-full  px-2 py-4 text-white ">
        <p className="text-xl  font-normal">Alarm Time</p>
        <button className="cursor-pointer bg-white text-black p-2" onClick={alarmSound}>Turn Off</button>
      </div>
    </div>
  )
}

export default AlarmPopup