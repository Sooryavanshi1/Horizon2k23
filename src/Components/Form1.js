import React,{useState,useRef} from 'react'
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import './Form.css'
import FormInput from './FormInput';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import BadgeIcon from '@mui/icons-material/Badge';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import firebase from '../Firebase';
import { db } from '../Firebase';
import { ContentCutOutlined } from '@mui/icons-material';
import { StraightenRounded } from '@material-ui/icons';
import HomeIcon from '@mui/icons-material/Home';
var str=""
var str1=""
function Form1() {
   function handleGenerate(){
      str=""
      // str="HZ22"+hid
      // setHoid(hid);
      // str= "HZ22"+new Date().getTime().toString();
      // console.log(str);
      str=new Date().getTime().toString();
      
      str1=str.slice(5,13);
      str1="HZ22"+str1
      console.log(str1)
   };

const[robo,setRobo]=useState(false);
const[Techskit,setTechskit]=useState(false);
const[photog,setPhotog]=useState(false);
const[cine,setCine]=useState(false);
const[tcir,setTcir]=useState(false);
const[ctrix,setCtrix]=useState(false);
const[papy,setPapy]=useState(false);
const[webd,setWebd]=useState(false);
const[wannac,setWannac]=useState(false);
const[hackm,setHackm]=useState(false);
const[dtd,setDtd]=useState(false);
const[autoc,setAutoc]=useState(false);
const[mechq,setMechq]=useState(false);
const[brug,setBrug]=useState(false);
// const[autow,setAutow]=useState(false);
const[embed,setEmbed]=useState(false);
const[flash,setFlash]=useState(false);
const[onspot,setOnspotquiz]=useState(false);
const[hoid,setHoid]=useState("");
const[got,setGot]=useState(false);
const[tecm,setTecm]=useState(false);
const[sdi,setSdi]=useState(false);
const[ppt,setPpt]=useState(false);
const[devcon,setDevcon]=useState(false);
const[tidea,setTidea]=useState(false);
const[blindcode,setBlindcode]=useState(false);
const[sysdes,setSysdes]=useState(false);
const[grades,setGrades]=useState(false);
const[lidef,setLidef]=useState(false);
const[count,setCount]=useState(0);
// console.log(name);
function downl(){
   const element=document.createElement("a")
   const file=new Blob([`  
   Hii 
   Your Details Have Been Submitted Successfully✌
   Your Horizon Id is: ${str1} 
   Use the horizon id to pay registration fee and for future references.

   Team HORIZON
   BCREC Durgapur
   `],{
      type:"text/plain;charset=utf-8",
   });
   element.href=URL.createObjectURL(file);
   element.download="YourHorizonId.txt"
   element.click()
};

const handleSubmit = (e) =>{
   handleGenerate();
   downl();
   e.preventDefault();
   db.collection("Details").add({
     
      RoboTrix: robo,
      Techskit: Techskit,
      Flashextempo:flash,
      Onspotquiz:onspot,
      Photography: photog,
      Cinetrix: cine,
      TrickyCircuits: tcir,
      Circuitrix: ctrix,
      Papyrus: papy,
      Webd: webd,
      Wannacode: wannac,
      HackMaze: hackm,
      DareToDebug: dtd,
      AutoCad: autoc,
      MechQuiz: mechq,
      HorizonId: str1,
      BrugIt: brug,
      // AutoCadWorkShop: autow,
      EmbedIt: embed,
      GameOfThrones:got,
      TechModels:tecm,
      StartupDiaries:sdi,
      PptTechnicalIdea:ppt,
      TechIdea:tidea,
      Devcon:devcon,
      Blindcode:blindcode,
      SystemDesign:sysdes,
      GraphicDesign:grades,
      LanguageIdentification:lidef
   })
   .then(()=>{
      alert(`  
      Hii 
      Your Details Have Been Submitted Successfully✌
      Your Horizon Id is: ${str1} 
      Use the horizon id to pay registration fee and for future references.

      Team HORIZON
      BCREC Durgapur
      `)
   })
   .catch((error)=>{
      alert(error.message);
   });
 
//   setHoid('')
//   setRobo(false)
//   setTreas(false)
//   setElecq(false)
//   setPra(false)
//   setTechq(false)
//   setCtrix(false)
//   setPapy(false)
//   setWebd(false)
//   setWannac(false)
//   setHackm(false)
//   setDtd(false)
//   setAutoc(false)
//   setMechq(false)
//   setBrug(false)
//   setAutow(false)
//   setEmbed(false)
};
//db.collection('contacts')
//.add({
//   name: name,
//   roll: roll,
//   email: email,
//   tel: tel,
//   dept: dept,
//   year: year,
//   want: want,
//   size: size,
//   robo: robo,
//   Treas: Treas,
//   elecq: elecq,
//   pra: pra,
//   techq: techq,
//   ctrix: ctrix,
//   papy: papy,
//   webd: webd,
//   wannac: wannac,
//   hackm: hackm,
//   dtd: dtd,
//   autoc: autoc,
//   mechq: mechq,
//   brug: brug,
//   autow: autow,
//   embed: embed,
//});
//};
const toggle=()=>{
   setRobo(current=>!current)
   var radioB = document.querySelector("input[name='RoboTrix']");
   if(robo===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle1=()=>{
   setTechskit(current=>!current)
   var radio1 = document.querySelector("input[name='Techskit']");
   if(Techskit===true){
      radio1.checked=false;
   }else{
      radio1.checked=true;
   }
}
const toggle2=()=>{
   setPhotog(current=>!current)
   var radioB = document.querySelector("input[name='Photography']");
   if(photog===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle3=()=>{
   setCine(current=>!current)
   var radioB = document.querySelector("input[name='Cinetrix']");
   if(cine===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle4=()=>{
   setTcir(current=>!current)
   var radioB = document.querySelector("input[name='Tricky Circuits']");
   if(tcir===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle5=()=>{
   setCtrix(current=>!current)
   var radioB = document.querySelector("input[name='CircuiTrix']");
   if(ctrix===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle6=()=>{
   setPapy(current=>!current)
   var radioB = document.querySelector("input[name='Papyrus']");
   if(papy===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle7=()=>{
   setWebd(current=>!current)
   var radioB = document.querySelector("input[name='Web-D']");
   if(webd===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle8=()=>{
   setWannac(current=>!current)
   var radioB = document.querySelector("input[name='WannaCode']");
   if(wannac===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle9=()=>{
   setHackm(current=>!current)
   var radioB = document.querySelector("input[name='HackMaze']");
   if(hackm===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle10=()=>{
   setDtd(current=>!current)
   var radioB = document.querySelector("input[name='Dare To Debug']");
   if(dtd===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle11=()=>{
   setAutoc(current=>!current)
   var radioB = document.querySelector("input[name='AutoCAD']");
   if(autoc===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle12=()=>{
   setMechq(current=>!current)
   var radioB = document.querySelector("input[name='Mechvation']");
   if(mechq===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle13=()=>{
   setBrug(current=>!current)
   var radioB = document.querySelector("input[name='Brug It']");
   if(brug===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
// const toggle14=()=>{
//    setAutow(current=>!current)
//    var radioB = document.querySelector("input[name='AutoCAD Workshop']");
//    if(autow===true){
//       radioB.checked=false;
//    }else{
//       radioB.checked=true;
//    }
// }

const toggle15=()=>{
   setEmbed(current=>!current)
   var radioB = document.querySelector("input[name='Embed-IT']");
   if(embed===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle16=()=>{
   setFlash(current=>!current)
   var radioB = document.querySelector("input[name='flash']");
   if(flash===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle17=()=>{
   setOnspotquiz(current=>!current)
   var radioB = document.querySelector("input[name='onspot']");
   if(onspot===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle18=()=>{
   setGot(current=>!current)
   var radioB = document.querySelector("input[name='got']");
   if(got===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle19=()=>{
   setSdi(current=>!current)
   var radioB = document.querySelector("input[name='sdi']");
   if(sdi===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle20=()=>{
   setPpt(current=>!current)
   var radioB = document.querySelector("input[name='ppt']");
   if(ppt===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle21=()=>{
   setTecm(current=>!current)
   var radioB = document.querySelector("input[name='tech']");
   if(tecm===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle22=()=>{
   setTidea(current=>!current)
   var radioB = document.querySelector("input[name='Tech-Idea']");
   if(tidea===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle23=()=>{
   setDevcon(current=>!current)
   var radioB = document.querySelector("input[name='Devcon']");
   if(devcon===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle24=()=>{
   setBlindcode(current=>!current)
   var radioB = document.querySelector("input[name='BlindCode']");
   if(blindcode===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle25=()=>{
   setSysdes(current=>!current)
   var radioB = document.querySelector("input[name='SystemDesign']");
   if(sysdes===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle26=()=>{
   setGrades(current=>!current)
   var radioB = document.querySelector("input[name='GraphicDesign']");
   if(grades===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
const toggle27=()=>{
   setLidef(current=>!current)
   var radioB = document.querySelector("input[name='LanguageIdentification']");
   if(lidef===true){
      radioB.checked=false;
   }else{
      radioB.checked=true;
   }
}
// const toggleTshirtTrue=()=>{
//    setWant(current=>true)
// }
// const toggleTshirtFalse=()=>{
//    setWant(current=>false)
// }
console.log(got);
console.log(sdi);
console.log(ppt);
console.log()
  return (
       <>
       <div id="register" style={{display:'flex',justifyContent:'center',background:'white' ,marginLeft:'25px',marginBottom:'40px',borderRadius:'2rem', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)',width:'95%'}}>
       {/* <HomeIcon style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)',height:'20px',marginTop:'10px',display:'flex'}}/> */}
       <Button variant="contained" color="secondary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)',height:'20px',marginTop:'10px',display:'flex'}} onClick={() => window.location.replace("/#home")}>
        Home
      </Button>
        <form className='main_form'>
          <div className='formInput'>
          <h1>SELECT THE EVENTS!!</h1>
          </div>
          

         <div style={{display:'flex',justifyContent:'center'}}>
         <p><b>Step 1:-</b>
         You need to select the events that you are Interested in.
             You can select 3 events for the regular fees (2 Central Events and 1 Departmental Event Only)
            .Further selections would require an additional fee of Rs 25 per Event.
            Total number of selection of Events should not exceed 8.
         </p>
         </div>
         <h3>Central Events</h3>
         <div className="Event">
         <div >
            <input type="radio" name="Techskit" value={Techskit} onClick={toggle1}/>Techskit
         </div>
         <div >
            <input type="radio" name="flash" value={flash} onClick={toggle16}/>Flashextempo
         </div>
         <div >
            <input type="radio" name="onspot" value={onspot} onClick={toggle17}/>Onspotquiz
         </div>
         <div >
            <input type="radio" name="Photography" value={photog} onClick={toggle2}/>Photography
         </div>
         <div >
            <input type="radio" name="got" value={photog} onClick={toggle18}/>Game Of Thrones
         </div>
         <div >
            <input type="radio" name="sdi" value={sdi} onClick={toggle19}/>Startup Diaries
         </div>
         <div >
            <input type="radio" name="Papyrus" value={papy} onClick={toggle6}/>Papyrus
         </div>
         <div >
            <input type="radio" name="tech" value={tecm} onClick={toggle21}/>Tech Models
         </div>
         <div >
            <input type="radio" name="Cinetrix" value={cine} onClick={toggle3}/>Cinetrix and Animation Movie
         </div>
         <div >
            <h3>Departmental Events</h3>
            <input type="radio" name="RoboTrix" value={robo} onClick={toggle}/>RoboTrix
         </div>
         <div >
            <input type="radio" name="ppt" value={photog} onClick={toggle20}/>Technovation(Ppt Presentation)
         </div>
         <div >
            <input type="radio" name="Tricky Circuits" value={tcir} onClick={toggle4}/>Tricky Circuits
         </div>
         <div >
            <input type="radio" name="Embed-IT" value={embed} onClick={toggle15}/>Embed-IT
         </div>
         <div >
            <input type="radio" name="CircuiTrix" value={ctrix} onClick={toggle5}/>CircuiTrix
         </div>
         <div >
            <input type="radio" name="Tech-Idea" value={tidea} onClick={toggle22}/>Tech-Idea(PPT Presentation)
         </div>
         <div >
            <input type="radio" name="Web-D" value={webd} onClick={toggle7}/>Web-D
         </div>
         <div >
            <input type="radio" name="WannaCode" value={wannac} onClick={toggle8}/>WannaCode
         </div>
         <div >
            <input type="radio" name="HackMaze" value={hackm} onClick={toggle9}/>HackMaze
         </div>
         <div >
            <input type="radio" name="Dare To Debug" value={dtd} onClick={toggle10}/>Dare To Debug
         </div>
         <div >
            <input type="radio" name="Devcon" value={devcon} onClick={toggle23}/>Devcon
         </div>
         <div >
            <input type="radio" name="BlindCode" value={blindcode} onClick={toggle24}/>Blind Code
         </div>
         <div >
            <input type="radio" name="SystemDesign" value={sysdes} onClick={toggle25}/>System Design
         </div>
         <div >
            <input type="radio" name="GraphicDesign" value={grades} onClick={toggle26}/>Graphic Design
         </div>
         <div >
            <input type="radio" name="LanguageIdentification" value={lidef} onClick={toggle27}/>Language Identification
         </div>
         <div >
            <input type="radio" name="AutoCAD" value={autoc} onClick={toggle11}/>AutoCAD Design Contest
         </div>
         <div >
            <input type="radio" name="Mechvation" value={mechq} onClick={toggle12}/>Mechvation
         </div>
         <div >
            <input type="radio" name="Brug It" value={brug} onClick={toggle13}/>Brug It
         </div>
         {/* <div >
            <input type="radio" name="AutoCAD Workshop" value={autow} onClick={toggle14}/>AutoCAD Workshop
         </div> */}
         
         {/* <div className="but">
      <Button variant="contained" color="primary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}} onClick={handleGenerate()}>
        Generate Horizon Id
      </Button>
      <div>
         <h1>hi id</h1>
      </div> */}
      
         {/* <div className="but">
      <Button variant="contained" color="secondary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}} onClick={handleSubmit} >
        Register!
      </Button>
      </div> */}
         </div>
         
            <div>
               *The Registration fees for Students of Dr.B.C. Roy Engineering College is Rs.300 
            </div>
            <div>
               *The Registration fees for Students other than Dr.B.C. Roy Engineering is Rs.400 
            </div>
            </form>
        </div>
       </>
  );
}

export default Form1