import { useContext } from "react";
import { myContext } from "../Contexts/mycontext";

const Alarm = () => {
  const {setNewAlarm, Allalarms,setAllalarms,setalarmState,newAlarm,isplaying } = useContext(myContext);


  

  const removeAlarm = (id)=>{
    const updatedAlarms = Allalarms.filter((element, index) => {
        return element.id !== id;
      });
      setAllalarms(updatedAlarms);
  }

  return (
    <div className={`w-full border border-[#555555] rounded-md max-w-[400px] ${ !newAlarm ? 'blur-none' : 'blur-sm'} ${ !isplaying ? 'blur-none' : 'blur-sm'}`}>
      <div className="flex justify-center text-normal bg-[#555555] items-center font-semibold  w-full p-2 border-b border-[#666680] shadow-sm shadow-white ">
        <p className="text-white">All Alarms</p>
        {/* <p onClick={()=>setNewAlarm(true)} className="cursor-pointer">+</p> */}
      </div>
      <div className="w-full ">
        {Allalarms?.length > 0 ? (
          <div>
            {Allalarms?.map((item, index) => {
              return (
                <div
                  className="flex justify-between items-center text-xl font-semibold w-full py-2 px-4 border-b border-2 border-[#f1f1f1]"
                  key={index}
                >
                  <div className="flex flex-col">
                    <div className="flex gap-2 justify-center font-normal  items-center">
                    <p className="font-[alarm-clock]">{ item.AM_PM == 'PM' ? parseInt(item.Hours) - parseInt(12) : item.Hours}</p>
                    :
                    <p className="font-[alarm-clock]">{item.Minutes}</p>
                    <p className="font-[alarm-clock]">{item.AM_PM}</p>
                    </div>
                    <div>
                        <p className="text-sm font-normal">{item.AlarmName}</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center justify-center">
                    <div onClick={() => setalarmState(item.id)}>
                      {item.Alarmstate ? (
                        <span className="border rounded-full border-grey flex items-center cursor-pointer bg-[#3642bd] w-12 bg-green justify-end">
                          <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white "></span>
                        </span>
                      ) : (
                        <span className="border rounded-full border-grey flex items-center cursor-pointer w-12 bg-slate-100 justify-start">
                          <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-slate-500"></span>
                        </span>
                      )}
                    </div>
                    <p className="text-[#F82816] cursor-pointer" onClick={()=>removeAlarm(item.id)}>x</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-full text-center p-4 bg-gray-100">
            <p>No Alarms Added Yet</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Alarm;
