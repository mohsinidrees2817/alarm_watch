import { useContext } from "react";
import { myContext } from "../Contexts/mycontext";

const Alarm = () => {
  const {setNewAlarm, Allalarms,setAllalarms,setalarmState } = useContext(myContext);




    

  // function music(){
  //   const music = new Audio('http://streaming.tdiradio.com:8000/house.mp3');
  //   music.play();
  //   music.loop =true;
  //   music.playbackRate = 2;
  //   console.log('music')
  //   // music.pause();
  // }
  

  const removeAlarm = (id)=>{
    const updatedAlarms = Allalarms.filter((element, index) => {
        return element.id !== id;
      });
      setAllalarms(updatedAlarms);
  }

  return (
    <div className="w-full border-2 rounded-lg">
      <div className="flex justify-between text-xl font-semibold w-full p-4 border-b-2  ">
        <p>Alarm</p>
        <p className="">+</p>
      </div>
      <div className="w-full">
        {Allalarms?.length > 0 ? (
          <div>
            {Allalarms?.map((item, index) => {
              return (
                <div
                  className="flex justify-between items-center text-xl font-semibold w-full p-4 border-b border-[#f0f0f0] "
                  key={index}
                >
                  <div className="flex flex-col">
                    <div className="flex gap-2 justify-center font-normal items-center">
                    <p>{ item.AM_PM == 'PM' ? parseInt(item.Hours) - parseInt(12) : item.Hours}</p>
                    :
                    <p>{item.Minutes}</p>
                    <p>{item.AM_PM}</p>
                    </div>
                    <div>
                        <p className="text-sm font-normal">{item.AlarmName}</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center justify-center">
                    <div onClick={() => setalarmState(item.id)}>
                      {item.Alarmstate ? (
                        <span className="border rounded-full border-grey flex items-center cursor-pointer bg-[#10FE09] w-12 bg-green justify-end">
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
          <div className="w-full text-center p-4">
            <p>No alarms added yet</p>
          </div>
        )}
      </div>
      <button
        className="bg-[#0090dd] text-white rounded p-2 m-4"
        onClick={() => setNewAlarm(true)}
      >
        Set Alarm
      </button>

    </div>
  );
};

export default Alarm;
