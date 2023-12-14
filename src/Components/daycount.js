import {useState,useEffect} from 'react';
import { getRemainingTimeUntilMsTimestamp } from './daycountutils';
import './daycount.css'
const defaultRemaingTime ={
    seconds:'00',
    minutes:'00',
    hours:'00',
    days:'00',
}
const Daycount = ({countdownTimestampMs}) =>{
    const [remainingTime,setRemainingTime] = useState(defaultRemaingTime);
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            updateRemaingTime(countdownTimestampMs);
        },1000);
        return ()=>clearInterval(intervalId);
    },[countdownTimestampMs]);
    function updateRemaingTime(countdown){
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }
    return(
        <>
        <div style={{display:"flex",justifyContent:"center"}}>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginLeft:'300px',}}>
            {remainingTime.seconds<0?<div className="countdown-timer"><h3>Horizon 2K23 is now live</h3></div>:<div className="countdown-timer">
        <h4 style={{marginTop:'0px'}}>Time left for Opening Ceremony(10:00 AM) of Horizon-2k23</h4>
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span className="two-numbers">{remainingTime.hours}</span>
            <span>hours</span>
            <span className="two-numbers">{remainingTime.minutes}</span>
            <span>minutes</span>
            <span className="two-numbers">{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>}

        </div>
        </>
    );
}
export default Daycount;