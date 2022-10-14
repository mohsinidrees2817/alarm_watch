import "../styles/globals.css";
import Header from "../components/Header";
import Watch from "../components/Watch";
import { useState,useEffect } from "react";
import { myContext } from "../Contexts/mycontext";
import { components } from "react-select";
import { songsdata } from "../components/Audios";
import { AudioHTMLAttributes } from "react";


function MyApp({ Component, pageProps }) {
  // let time = new Date().toLocaleTimeString();
  const [alarm, setalarm] = useState(false);
  const [newAlarm, setNewAlarm] = useState(false);
  const [curentTime, setCurentTime] = useState('');
  const [Allalarms, setAllalarms] = useState([]);
  const [isplaying, setisplaying] = useState(false);
  const [song,setsong] = useState(null);
  const [currentAlarmName,setCurrentAlarmname] = useState('');
  const [currentAlarmTime,setCurrentAlarmTime] = useState('');

  useEffect(() => {
    setsong({audio: new Audio("/Songs/1.mp3")})
    setCurentTime(new Date().toLocaleTimeString())
  }, [])
  

  function alarmSound() {
  // const song = new Audio("/Songs/1.mp3");
    if (!isplaying) {
      song.audio.play();
      setisplaying(true);

      console.log("alarmed on");
    } else {
      song.audio.pause();
      setisplaying(false);
      console.log("alarmed off");
    }
  }

  const setalarmState = (id) => {
    let Updatedalarm = Allalarms.map((elem) => {
      if (elem.id == id) {
        elem.Alarmstate = !elem.Alarmstate;
        return { ...elem };
      }
      return elem;
    });
    setAllalarms(Updatedalarm);
  };

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    let time2 = new Date();
    let current_hour = time2.getHours();
    let current_min = time2.getMinutes();
    let current_sec = time2.getSeconds();

    Allalarms?.map((elem) => {
      if (
        elem.Hours == current_hour &&
        elem.Minutes == current_min &&
        elem.alarmsecond == current_sec &&
        elem.Alarmstate == true
      ) {
        console.log("its alarm time");
        alarmSound();
        setalarmState(elem.id);
        setCurrentAlarmname(elem.AlarmName);
        setCurrentAlarmTime(time);
        return;
      }
      return elem;
    });
    setCurentTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <>
      <myContext.Provider
        value={{
          alarm,
          setalarm,
          curentTime,
          setCurentTime,
          newAlarm,
          setNewAlarm,
          isplaying,
          setisplaying,
          Allalarms,
          setAllalarms,
          setalarmState,
          alarmSound,
          song,
          currentAlarmName,
          currentAlarmTime
        }}
      >
        <Header />
        <div className="flex justify-center items-center">
          <Watch />
        </div>
        <Component {...pageProps} />
      </myContext.Provider>
    </>
  );
}

export default MyApp;
