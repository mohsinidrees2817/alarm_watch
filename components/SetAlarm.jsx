import { useContext, useState,useEffect } from "react";
import { myContext } from "../Contexts/mycontext";
import Select from 'react-select'
import { songsdata } from "./Audios";


const SetAlarm = () => {
    const {newAlarm, setNewAlarm,Allalarms, setAllalarms} = useContext(myContext)
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
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
    <div className="w-full  flex flex-col justify-center gap-4 items-center  bg-[#ececf3] shadow-md ">
      <div className="bg-[#3642bd] flex justify-between items-center w-full  px-2 py-4 text-white ">
        <p className="text-xl  font-normal">Set Alarm</p>
        <p className="cursor-pointer" onClick={()=>setNewAlarm(false)}>X</p>
      </div>
      <div className="flex flex-col justify-center items-center w-full ">
        <p className="text-lg text-[#555555] font-semibold">Alarm Title</p>
      <input type="text" className="py-[4px] p-4  w-full max-w-[350px]  bg-[#ececf3]  shadow-inner  rounded " placeholder="Alarm Title"  onChange={(e)=>setAlarmname(e.target.value)}/>
      </div>

      <div className="flex flex-wrap gap-4 py-4 justify-center items-center w-full ">
        <div className="flex flex-col justify-center items-center shadow-md shadow-white" >
          <select id="hours-select"  className="py-[4px] p-4  w-full max-w-[160px]  bg-[#ececf3] shadow-inner rounded shadow-outer flex justify-end items-center gap-2" onChange={(e)=>setHours(e.target.value)}>
          <option value="00" className="bg-[#2e2e2e] text-white ">Hours</option>
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
        {/* <div className="flex flex-col justify-center items-center">
          <p>Minutes</p>
          <Select id="filter-by" options={options} defaultValue={options[0]} className="py-[4px] p-4  w-full max-w-[85px] bg-[#ececf3] shadow-inner rounded shadow-outer flex justify-end items-center gap-2" onChange={MinutesInputValue}>
          </Select>
        </div> */}
        <div className="flex flex-col justify-center items-center shadow-md shadow-white" >
          <select id="hours-select"  className="py-[4px] p-4  w-full max-w-[160px]  bg-[#ececf3] shadow-inner  rounded  flex justify-end items-center gap-2" onChange={(e)=>setMinutes(e.target.value)}>
          <option value="00" className="bg-[#2e2e2e] text-white ">Minutes</option>
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
            <option value="13" className="bg-[#2e2e2e] text-white ">13</option>
            <option value="14" className="bg-[#2e2e2e] text-white ">14</option>
            <option value="15" className="bg-[#2e2e2e] text-white ">15</option>
            <option value="16" className="bg-[#2e2e2e] text-white ">16</option>
            <option value="17" className="bg-[#2e2e2e] text-white ">17</option>
            <option value="18" className="bg-[#2e2e2e] text-white ">18</option>
            <option value="19" className="bg-[#2e2e2e] text-white ">19</option>
            <option value="20" className="bg-[#2e2e2e] text-white ">20</option>
            <option value="21" className="bg-[#2e2e2e] text-white ">21</option>
            <option value="22" className="bg-[#2e2e2e] text-white ">22</option>
            <option value="23" className="bg-[#2e2e2e] text-white ">23</option>
            <option value="24" className="bg-[#2e2e2e] text-white ">24</option>
            <option value="25" className="bg-[#2e2e2e] text-white ">25</option>
            <option value="26" className="bg-[#2e2e2e] text-white ">26</option>
            <option value="27" className="bg-[#2e2e2e] text-white ">27</option>
            <option value="28" className="bg-[#2e2e2e] text-white ">28</option>
            <option value="29" className="bg-[#2e2e2e] text-white ">29</option>
            <option value="30" className="bg-[#2e2e2e] text-white ">30</option>
            <option value="31" className="bg-[#2e2e2e] text-white ">31</option>
            <option value="32" className="bg-[#2e2e2e] text-white ">32</option>
            <option value="33" className="bg-[#2e2e2e] text-white ">33</option>
            <option value="34" className="bg-[#2e2e2e] text-white ">34</option>
            <option value="35" className="bg-[#2e2e2e] text-white ">35</option>
            <option value="36" className="bg-[#2e2e2e] text-white ">36</option>
            <option value="37" className="bg-[#2e2e2e] text-white ">37</option>
            <option value="38" className="bg-[#2e2e2e] text-white ">38</option>
            <option value="39" className="bg-[#2e2e2e] text-white ">39</option>
            <option value="40" className="bg-[#2e2e2e] text-white ">40</option>
            <option value="41" className="bg-[#2e2e2e] text-white ">41</option>
            <option value="42" className="bg-[#2e2e2e] text-white ">42</option>
            <option value="43" className="bg-[#2e2e2e] text-white ">43</option>
            <option value="44" className="bg-[#2e2e2e] text-white ">44</option>
            <option value="45" className="bg-[#2e2e2e] text-white ">45</option>
            <option value="46" className="bg-[#2e2e2e] text-white ">46</option>
            <option value="47" className="bg-[#2e2e2e] text-white ">47</option>
            <option value="48" className="bg-[#2e2e2e] text-white ">48</option>
            <option value="49" className="bg-[#2e2e2e] text-white ">49</option>
            <option value="50" className="bg-[#2e2e2e] text-white ">50</option>
            <option value="51" className="bg-[#2e2e2e] text-white ">51</option>
            <option value="52" className="bg-[#2e2e2e] text-white ">52</option>
            <option value="53" className="bg-[#2e2e2e] text-white ">53</option>
            <option value="54" className="bg-[#2e2e2e] text-white ">54</option>
            <option value="55" className="bg-[#2e2e2e] text-white ">55</option>
            <option value="56" className="bg-[#2e2e2e] text-white ">56</option>
            <option value="57" className="bg-[#2e2e2e] text-white ">57</option>
            <option value="58" className="bg-[#2e2e2e] text-white ">58</option>
            <option value="59" className="bg-[#2e2e2e] text-white ">59</option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-center shadow-md shadow-white" onChange={(e)=>setamPm(e.target.value)}>
          <select id="filter-by"  className="py-[4px] p-4  w-full max-w-[160px]  bg-[#ececf3] shadow-inner rounded shadow-outer flex justify-end items-center gap-2">
            <option value="AM" className="bg-[#2e2e2e] w-full text-white ">AM/PM</option>
            <option value="AM" className="bg-[#2e2e2e] text-white ">AM</option>
            <option value="PM" className="bg-[#2e2e2e] text-white ">PM</option>
          </select>
        </div>
      </div>

      <button className="bg-[#3642bd] text-white rounded py-2 px-6 m-4" onClick={()=>saveAlarm()}>Save</button>

    </div>
  );
};

export default SetAlarm;
