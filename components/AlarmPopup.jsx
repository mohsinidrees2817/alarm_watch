import { useContext, useState,useEffect } from "react";
import { myContext } from "../Contexts/mycontext";
import Select from 'react-select'

const AlarmPopup = () => {
    const {alarmSound,currentAlarmName,currentAlarmTime} = useContext(myContext)

  return (
    <div className="bg-[#ececf3] w-full max-w-[700px] border-2 border-slate-300">
        <div className="bg-[#3642bd] flex flex-col justify-between items-center w-full  px-2 py-4 text-white ">
        <p className="text-xl  font-bold">Alarm Time</p>
        </div>
        <div className="w-full  flex flex-col justify-center gap-2 items-center p-4">
        <p className="text-xl  font-semibold text-[#555555]">Alarm Name: <span className="font-normal text-xl">{currentAlarmName}</span></p>
        <p className="text-xl  font-semibold text-[#555555]">Alarm Time: <span className="font-normal font-['alarm-clock'] text-xl"> {currentAlarmTime}</span></p>
        <button className="cursor-pointer bg-[#3642bd] rounded text-white p-2 " onClick={alarmSound}>Turn Off</button>
        </div>

    </div>
  )
}

export default AlarmPopup