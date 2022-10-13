import { useContext } from "react";
import { myContext } from "../Contexts/mycontext";
import SetAlarm from "./SetAlarm";
import AlarmPopup from "./AlarmPopup";

import Alarm from "./Alarm";
const Watch = () => {
    const {curentTime,newAlarm,isplaying,setisplaying} = useContext(myContext)

  return (
    <div className='flex flex-col gap-4 justify-center items-center py-12 relative'>
        <p className='md:text-8xl  sm:text-6xl text-7xl p-4 font-bold text-[#555555] border-2 border-black rounded-lg md:p-8'>{curentTime || '00 : 00 : 00'}</p>
        <Alarm/>
        {newAlarm &&
        <div className="w-full absolute shadow-lg">
        <SetAlarm/>
        </div>
        }
        {isplaying && 
        <div className="w-full absolute shadow-lg">
          <AlarmPopup/>
        </div>
        }



    </div>


  )
}

export default Watch