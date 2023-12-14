import React from "react";
import './hitcounter.css';
function Hitcounter(){
    const countEl = document.getElementById("count");
    countvisits();

    function countvisits(){
        fetch('https://api.countapi.xyz/update/techfest/horizon/?amount=1')
        .then((res)=>res.json())
        .then((res)=>{
            countEl.innerHTML = res.value;
        });
    }
    return(
        <>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div className="hit-counter">
        <p>This page was viewed</p>
        <h1 id="count">0</h1>
        <p>times</p>
        </div>
        </div>
        </>
    )
}
export default Hitcounter;
