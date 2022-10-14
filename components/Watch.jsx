import { useContext } from "react";
import { myContext } from "../Contexts/mycontext";
import SetAlarm from "./SetAlarm";
import AlarmPopup from "./AlarmPopup";

import Alarm from "./Alarm";
const Watch = () => {
  var days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
  const current = new Date();
  const date = `${current.getDate()}   ${current.getMonth()+1}   ${current.getFullYear()}`;
  const day = current.getDay();
  const currentday = days[day];
    const {curentTime,newAlarm,isplaying,setNewAlarm} = useContext(myContext)

  return (
    <div className={`flex flex-col gap-4 justify-center items-center py-4 relative w-[100vw] bg-[#ececf3] min-h-[90vh]`}>
      <div className="flex flex-col justify-center items-center">
        <p className={`md:text-9xl  sm:text-6xl font-[alarm-clock] text-7xl p-4 font-normal text-[#555555] text-center rounded-lg md:p-8 ${ !newAlarm ? 'blur-none' : 'blur-sm'}  ${ !isplaying ? 'blur-none' : 'blur-sm'}`}>{curentTime || '00 : 00 : 00'}</p>
        <div className="font-[alarm-clock] text-2xl sm:text-4xl text-[#666666] flex gap-4 flex-wrap justify-center items-center ">
          <p>{currentday}</p>
          <p>{date}</p> </div>
        </div>
        <button
        className="bg-[#3642bd] text-white rounded p-2 m-4 w-full max-w-[300px]"
        onClick={() => setNewAlarm(true)}
      >
        Set Alarm
      </button>
        <Alarm/>
        {newAlarm &&
        <div className="w-full absolute shadow-lg max-w-[700px]">
        <SetAlarm/>
        </div>
        }
        {isplaying && 
        <div className="w-full absolute shadow-lg max-w-[600px] ">
          <AlarmPopup/>
        </div>
        }



    </div>


  )
}

export default Watch