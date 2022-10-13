import { useContext, useState,useEffect } from "react";
import { myContext } from "../Contexts/mycontext";
import Select from 'react-select'
import { songsdata } from "./Audios";


const SetAlarm = () => {
    const {newAlarm, setNewAlarm,Allalarms, setAllalarms} = useContext(myContext)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [amPM, setamPm] = useState('AM')
    const [Alarmname, setAlarmname] = useState('Alarm')
    const [options,setOptions] = useState([])
    
    useEffect(() => {
        minuteOptions();
    }, [])

    function minuteOptions(){
        for (let i=0; i<=60; i++){
           let option = {label: i,value: i};
            options.push(option);
        }

    }


    function generateId() {
        return (
          Math.random().toString(36).substring(2) +
          new Date().getTime().toString(36)
        );
      }

      function MinutesInputValue(value){
        let minutes = value.value;
        console.log(minutes);
        setMinutes(minutes);
      }
    const saveAlarm = ()=>{
        setNewAlarm(false);
        let ampm = amPM;
        let num = hours;
        console.log(num)
        let alarmDetails = {
            Hours: ampm == 'PM' ? parseInt(num) + parseInt(12) : hours,
            Minutes: minutes,
            AM_PM: amPM,
            Alarmstate: true,
            id: generateId(),
            AlarmName: Alarmname,
            alarmsecond: 0,
        }
        setAllalarms([...Allalarms,alarmDetails])
        console.log(alarmDetails,'details')
    }


  return (
    <div className="w-full flex flex-col justify-center gap-4 items-center  bg-white shadow-md">
      <div className="bg-[#0090dd] flex justify-between items-center w-full  px-2 py-4 text-white ">
        <p className="text-xl  font-normal">Set Alarm</p>
        <p className="cursor-pointer" onClick={()=>setNewAlarm(false)}>X</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>Alarm Title</p>
      <input type="text" className="border-2 border-[#8d8d8d] rounded"  onChange={(e)=>setAlarmname(e.target.value)}/>
      </div>
      <div className="flex flex-wrap gap-12 py-4 justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <p>Hours</p>
          <select id="filter-by"  className="h-8 bg-transparent border-2 border-[#555555] px-6  rounded " onChange={(e)=>setHours(e.target.value)}>
          <option value="00" className="bg-[#2e2e2e] text-white ">00</option>
            <option value="01" className="bg-[#2e2e2e] text-white ">01</option>
            <option value="02" className="bg-[#2e2e2e] text-white ">02</option>
            <option value="03" className="bg-[#2e2e2e] text-white ">03</option>
            <option value="04" className="bg-[#2e2e2e] text-white ">04</option>
            <option value="05" className="bg-[#2e2e2e] text-white ">05</option>
            <option value="06" className="bg-[#2e2e2e] text-white ">06</option>
            <option value="07" className="bg-[#2e2e2e] text-white ">07</option>
            <option value="08" className="bg-[#2e2e2e] text-white ">08</option>
            <option value="09" className="bg-[#2e2e2e] text-white ">09</option>
            <option value="10" className="bg-[#2e2e2e] text-white ">10</option>
            <option value="11" className="bg-[#2e2e2e] text-white ">11</option>
            <option value="12" className="bg-[#2e2e2e] text-white ">12</option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Minutes</p>
          <Select id="filter-by" options={options} defaultValue={options[0]} className=" bg-transparent border-[#555555]  rounded " onChange={MinutesInputValue}>
          </Select>
        </div>
        <div className="flex flex-col justify-center items-center" onChange={(e)=>setamPm(e.target.value)}>
          <p>AM/PM</p>
          <select id="filter-by"  className="h-8 bg-transparent border-2 border-[#555555] px-6  rounded ">
            <option value="AM" className="bg-[#2e2e2e] text-white ">AM</option>
            <option value="PM" className="bg-[#2e2e2e] text-white ">PM</option>
          </select>
        </div>
      </div>

      <button className="bg-black text-white rounded py-2 px-6 m-4" onClick={()=>saveAlarm()}>Save</button>

    </div>
  );
};

export default SetAlarm;
