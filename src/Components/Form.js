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
import CheckroomIcon from '@mui/icons-material/Checkroom';
import firebase from '../Firebase';
import { db } from '../Firebase';
import {collection,addDoc} from 'firebase/firestore';
import { ContentCutOutlined } from '@mui/icons-material';
import { StraightenRounded } from '@material-ui/icons';
import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { storage } from '../Firebase';
import { ref , uploadBytes } from 'firebase/storage';
import  {v4} from 'uuid'
import './Banner.css'
import { getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
var str=""
var str1=""
function Form() {
  
const[stu,setStu]=useState(false);
const[name,setName]=useState("");
const[coll,setColl]=useState("");
const[roll,setRoll]=useState("");
const[email,setEmail]=useState("");
const[tel,setTel]=useState("");
const[dept,setDept]=useState("");
const[year,setYear]=useState("");
const[want,setWant]=useState(false);
const[size,setSize]=useState("");
// const[robo,setRobo]=useState(false);
const[Treas,setTreas]=useState(false);
const[elecq,setElecq]=useState(false);
const[pra,setPra]=useState(false);
const[techq,setTechq]=useState(false);
const[mem,setMem]=useState(false);
// const[ctrix,setCtrix]=useState(false);
// const[papy,setPapy]=useState(false);
// const[webd,setWebd]=useState(false);
// const[wannac,setWannac]=useState(false);
const[hackm,setHackm]=useState(false);
// const[dtd,setDtd]=useState(false);
// const[autoc,setAutoc]=useState(false);
const[mechq,setMechq]=useState(false);
// const[brug,setBrug]=useState(false);
const[autow,setAutow]=useState(false);
// const[embed,setEmbed]=useState(false);
// const[cine,setCine]=useState(false);
// const[photog,setPhotog]=useState(false);
const[hoid,setHoid]=useState("");
// const[got,setGot]=useState(false);
const[bp,setBp]=useState(false);
// const[ppt,setPpt]=useState(false);
const[robo,setRobo]=useState(false);
const[Techskit,setTechskit]=useState(false);
const[photog,setPhotog]=useState(false);
const[cine,setCine]=useState(false);
const[tcir,setTcir]=useState(false);
const[ctrix,setCtrix]=useState(false);
const[papy,setPapy]=useState(false);
const[webd,setWebd]=useState(false);
const[wannac,setWannac]=useState(false);
// const[hackm,setHackm]=useState(false);
const[dtd,setDtd]=useState(false);
const[autoc,setAutoc]=useState(false);
// const[mechq,setMechq]=useState(false);
const[brug,setBrug]=useState(false);
// const[autow,setAutow]=useState(false);
const[embed,setEmbed]=useState(false);
const[flash,setFlash]=useState(false);
const[onspot,setOnspotquiz]=useState(false);
// const[hoid,setHoid]=useState("");
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
const[cencount,setCenCount]=useState(0);
const[depcount,setDepCount]=useState(0);
const[reg,setReg]=useState(400);
const[dis,setDis]=useState(50);
const[cencountamount,setCenCountAmount]=useState(0);
const[depcountamount,setDepCountAmount]=useState(0);
const[totalamount,setTotalAmount]=useState(0);
const[tran,setTran]=useState('');
const[idcard,setIdcard]=useState(null);
const[translip,setTranslip]=useState(null);
const[memId,setMemId]=useState(null);
const[idurl,setIdUrl]=useState("");
const[tranurl,setTranUrl]=useState("");
const[memurl,setMemUrl]=useState("");
// console.log(name);


const handleSubmit = async (e) =>{
   // handleGenerate();
   // downl();
   uploadId();
   uploadTranslip();
   uploadMemId();
   console.log("submitted");
   e.preventDefault();
   // handleUploadId();
   // db.collection("Details").add({
   //    Name: name,
   //    // UniversityRollNo: roll,
   //    CollegeName: coll,
   //    TransactionId: tran,
   //    Email: email,
   //    PhoneNumber: tel,
   //    Department: dept,
   //    Year: year,
   //    // TshirtRequirment: want,
   //    Size: size,
   //    RoboTrix: robo,
   //    TreasureHunt: Treas,
   //    Cinetrix:cine,
   //    Photography:photog,
   //    ElectronicsQ: elecq,
   //    Pradarshan: pra,
   //    Techquiz: techq,
   //    Circuitrix: ctrix,
   //    Papyrus: papy,
   //    Webd: webd,
   //    Wannacode: wannac,
   //    HackMaze: hackm,
   //    DareToDebug: dtd,
   //    AutoCad: autoc,
   //    MechQuiz: mechq,
   //    // HorizonId: str1,
   //    BrugIt: brug,
   //    AutoCadWorkShop: autow,
   //    EmbedIt: embed,
   //    GameOfThrones:got,
   //    BPlan:bp,
   //    PptTechnicalIdea:ppt,
   // })
   // .then(()=>{
   //    alert(`  
   //    Hii ${name}
   //    Your Details Have Been Submitted Successfully✌

   //    Team HORIZON
   //    BCREC Durgapur
   //    `)
   // })
   // .catch((error)=>{
   //    alert(error.message);
   // });
   console.log("sending Data");
   try{
      const docRef = await addDoc(collection(db,"Details"),
      {            
         Name: name,
         // UniversityRollNo: roll,
         CollegeName: coll,
         TransactionId: tran,
         Email: email,
         PhoneNumber: tel,
         Department: dept,
         Year: year,
         // TshirtRequirment: want,
         Techskit:Techskit,
         Flashextempo:flash,
         Onspotquiz:onspot,
         StartupDiaries:sdi,
         TechModels:tecm,
         Size: size,
         RoboTrix: robo,
         Cinetrix:cine,
         Photography:photog,
         Circuitrix: ctrix,
         Papyrus: papy,
         Webd: webd,
         Wannacode: wannac,
         HackMaze: hackm,
         DareToDebug: dtd,
         AutoCad: autoc,
         // HorizonId: str1,
         BrugIt: brug,
         AutoCadWorkShop: autow,
         EmbedIt: embed,
         GameOfThrones:got,
         Technovation:ppt,
         Tricky_Circuits:tcir,
         TechIdea:tidea,
         HackMaze:hackm,
         DareToDebug:dtd,
         Devcon:devcon,
         BlindCode:blindcode,
         SystemDesign:sysdes,
         GraphicDesign:grades,
         LanguageIdentification:lidef,
         AutoCad:autoc,
         Mechvation:mechq,
         BrugIt:brug,
         StudentOfBCREC:stu,
         MemberOfProfessionalBody:mem,
         TotalPayableAmount:(cencount>2?(cencount-2)*25:0)+(depcount>1?(depcount-1)*25:0)+reg,
         IdCardUrl:idurl,
         MemberOfProfesionalBodyUrl:memurl,
         TransactionSlipUrl:tranurl,
            }
      );
      alert(`Hi ${name} Your Form Has been submitted`);
   }
   catch(e){
      console.log(e);
   }
   console.log("done");
  setName('')
  setColl('')
  setRoll('')
  setEmail('')
  setTel('')
  setDept('')
  setYear('')
  setTran('')
//   setWant(false)
  setSize('')
  setIdcard(null)
  setMemId(null)
  setTranslip(null)
  setIdUrl("")
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

      if(depcount>0){
         setDepCount(depcount=>depcount-1)
         // setDepCountAmount(depcountamount=>depcountamount-25)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle1=()=>{
   setTechskit(current=>!current)
   var radio1 = document.querySelector("input[name='Techskit']");
   if(Techskit===true){
      radio1.checked=false;
   if(cencount>0){
      setCenCount(cencount=>cencount-1)
      setCenCountAmount(cencountamount=>cencountamount-25)
   }
   }else{
      radio1.checked=true;
      console.log(cencount)
      if(cencount<=3){
         setCenCount(cencount=>cencount+1)
      }else{
         alert('The Maximum Number of Addition Central events is reached Deselect all responses and Reselect them')
      }
   }
}
const toggle2=()=>{
   setPhotog(current=>!current)
   var radioB = document.querySelector("input[name='Photography']");
   if(photog===true){
      radioB.checked=false;
      if(cencount>0){
         setCenCount(cencount=>cencount-1)
      }
      }else{
         console.log(cencount);
         if(cencount<=3){
            radioB.checked=true;
            setCenCount(cencount=>cencount+1)
         }else{
            alert('The Maximum Number of Addition Central events is reached Deselect all responses and Reselect them')
         }
      }
}
const toggle3=()=>{
   setCine(current=>!current)
   var radioB = document.querySelector("input[name='Cinetrix']");
   if(cine===true){
      radioB.checked=false;
      if(cencount>0){
         setCenCount(cencount=>cencount-1)
      }
      }else{
         radioB.checked=true;
         console.log(cencount);
         if(cencount<=3){
            setCenCount(cencount=>cencount+1)
         }else{
            alert('The Maximum Number of Addition Central events is reached Deselect all responses and Reselect them')
         }
      }
}
const toggle4=()=>{
   setTcir(current=>!current)
   var radioB = document.querySelector("input[name='Tricky Circuits']");
   if(tcir===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle5=()=>{
   setCtrix(current=>!current)
   var radioB = document.querySelector("input[name='CircuiTrix']");
   if(ctrix===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle6=()=>{
   setPapy(current=>!current)
   var radioB = document.querySelector("input[name='Papyrus']");
   if(papy===true){
      radioB.checked=false;
      if(cencount>0){
         setCenCount(cencount=>cencount-1)
      }
      }else{
         radioB.checked=true;
         console.log(cencount);
      if(cencount<=2){
         setCenCount(cencount=>cencount+1)
      }else{
         alert('The Maximum Number of Addition Central events is reached Deselect all responses and Reselect them')
      }
      }
}
const toggle7=()=>{
   setWebd(current=>!current)
   var radioB = document.querySelector("input[name='Web-D']");
   if(webd===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle8=()=>{
   setWannac(current=>!current)
   var radioB = document.querySelector("input[name='WannaCode']");
   if(wannac===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle9=()=>{
   setHackm(current=>!current)
   var radioB = document.querySelector("input[name='HackMaze']");
   if(hackm===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle10=()=>{
   setDtd(current=>!current)
   var radioB = document.querySelector("input[name='Dare To Debug']");
   if(dtd===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle11=()=>{
   setAutoc(current=>!current)
   var radioB = document.querySelector("input[name='AutoCAD']");
   if(autoc===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle12=()=>{
   setMechq(current=>!current)
   var radioB = document.querySelector("input[name='Mechvation']");
   if(mechq===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle13=()=>{
   setBrug(current=>!current)
   var radioB = document.querySelector("input[name='Brug It']");
   if(brug===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
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
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
}
}
const toggle16=()=>{
   setFlash(current=>!current)
   var radioB = document.querySelector("input[name='flash']");
   if(flash===true){
      radioB.checked=false;
      if(cencount>0){
         setCenCount(cencount=>cencount-1)
      }
      }else{
         radioB.checked=true;
         console.log(cencount);
      if(cencount<=3){
         setCenCount(cencount=>cencount+1)
      }else{
         alert('The Maximum Number of Addition Central events is reached Deselect all responses and Reselect them')
      }
      }
}
const toggle17=()=>{
   setOnspotquiz(current=>!current)
   var radioB = document.querySelector("input[name='onspot']");
   if(onspot===true){
      radioB.checked=false;
      if(cencount>0){
         setCenCount(cencount=>cencount-1)
      }
      }else{
         radioB.checked=true;
         console.log(cencount);
         if(cencount<=3){
            setCenCount(cencount=>cencount+1)
         }else{
            alert('The Maximum Number of Addition Central events is reached Deselect all responses and Reselect them')
         }
      }
}
const toggle18=()=>{
   setGot(current=>!current)
   var radioB = document.querySelector("input[name='got']");
   if(got===true){
      radioB.checked=false;
      if(cencount>0){
         setCenCount(cencount=>cencount-1)
      }
      }else{
         radioB.checked=true;
         console.log(cencount);
         if(cencount<=3){
            setCenCount(cencount=>cencount+1)
         }else{
            alert('The Maximum Number of Addition Central events is reached Deselect all responses and Reselect them')
         }
      }
}
const toggle19=()=>{
   setSdi(current=>!current)
   var radioB = document.querySelector("input[name='sdi']");
   if(sdi===true){
      radioB.checked=false;
      if(cencount>0){
         setCenCount(cencount=>cencount-1)
      }
      }else{
         radioB.checked=true;
         console.log(cencount);
      if(cencount<=3){
         setCenCount(cencount=>cencount+1)
      }else{
         alert('The Maximum Number of Addition Central events is reached Deselect all responses and Reselect them')
      }
      }
}
const toggle20=()=>{
   setPpt(current=>!current)
   var radioB = document.querySelector("input[name='ppt']");
   if(ppt===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle21=()=>{
   setTecm(current=>!current)
   var radioB = document.querySelector("input[name='tech']");
   if(tecm===true){
      radioB.checked=false;
      if(cencount>0){
         setCenCount(cencount=>cencount-1)
      }
      }else{
         radioB.checked=true;
         console.log(cencount);
         if(cencount<=3){
            setCenCount(cencount=>cencount+1)
         }else{
            alert('The Maximum Number of Addition Central events is reached Deselect all responses and Reselect them')
         }
      }
}
const toggle22=()=>{
   setTidea(current=>!current)
   var radioB = document.querySelector("input[name='Tech-Idea']");
   if(tidea===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle23=()=>{
   setDevcon(current=>!current)
   var radioB = document.querySelector("input[name='Devcon']");
   if(devcon===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle24=()=>{
   setBlindcode(current=>!current)
   var radioB = document.querySelector("input[name='BlindCode']");
   if(blindcode===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle25=()=>{
   setSysdes(current=>!current)
   var radioB = document.querySelector("input[name='SystemDesign']");
   if(sysdes===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle26=()=>{
   setGrades(current=>!current)
   var radioB = document.querySelector("input[name='GraphicDesign']");
   if(grades===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
            radioB.checked=true;
            setDepCount(depcount=>depcount+1)
            }else{
               alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
            }
      }
}
const toggle27=()=>{
   setLidef(current=>!current)
   var radioB = document.querySelector("input[name='LanguageIdentification']");
   if(lidef===true){
      radioB.checked=false;
      if(depcount>0){
         setDepCount(depcount=>depcount-1)
      }
      }else{
         if(depcount<=2){
         radioB.checked=true;
         setDepCount(depcount=>depcount+1)
         }else{
            alert('The Number of maximum Departmental Events you can choose is 3 Deselect all responses and Reselect them')
         }
      }
}
const toggle28=()=>{
   setStu(current=>!current)
   var radioB = document.querySelector("input[name='student']");
   if(stu===true){
      radioB.checked=false;
      if(mem===true){
         setReg(reg=>350)
      }else{
      setReg(reg=>400)
      }
   }else{
      radioB.checked=true;
      if(mem===true){
         setReg(reg=>250)
      }
      else{
         setReg(reg=>300)
      }
   }
}
const toggle29=()=>{
   setMem(current=>!current)
   var radioB = document.querySelector("input[name='body']");
   if(mem===true){
      radioB.checked=false;
      setReg(reg=>reg+dis);
   }else{
      radioB.checked=true;
      setReg(reg=>reg-dis);
      }
   }
   const collegeIdChanger = (event) =>{
      if(event.target.files[0]){
         setIdcard(event.target.files[0])
      }
   };
   // *************// const handleUploadId = () => {
   //    const uploadTask = storage.ref(`collegeIdcard/${idcard.name}`).put(idcard);
   //    uploadTask.on(
   //      "state_changed",
   //      snapshot => {
   //        const progress = Math.round(
   //          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
   //        );
   //       //  setProgress(progress);
   //      },
   //      error => {
   //        console.log(error);
   //      },
   //      () => {
   //        storage
   //          .ref("images")
   //          .child(idcard.name)
   //          .getDownloadURL()
   //          .then(url => {
   //            setIdUrl(url);
   //          });
   //      }
   //    );
   //  };

    const TransactionIdChanger = (event) =>{
      if(event.target.files[0]){
         setIdcard(event.target.files[0])
      }
   };
   const uploadId = () => {
  
      if (idcard==null) {
      alert("Please choose a file first!")
         return
   }

   const storageRef = ref(storage,`/pdfs/${idcard.name}`)
   const uploadTask = uploadBytesResumable(storageRef, idcard);
 
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
 
            // update progress
//             setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                  setIdUrl(url);
            });
        }
    ); 




      
      // if(idcard==null){
      //    return
      // }

//       const idRef = ref(storage,`pdfs/${idcard.name + v4()}`);
// console.log(idRef)
   
//       uploadBytes(idRef,idcard).then(()=>{
//          alert("File Uploaded")
//       })
   }
   const uploadTranslip = () => {
      if(translip==null){
         return
      }
      const transRef = ref(storage,`pdfs/${translip.name +v4()}`);
      // var url = getDownloadURL(transRef)
      // console.log(url);
      uploadBytes(transRef,translip).then(()=>{
         alert("File Uploaded")
         // setTranUrl(transRef)
      })
   };
   const uploadMemId = () => {
      if(memId==null){
         return
      }
      const memIdRef = ref(storage,`pdfs/${memId.name + v4()}`);
      uploadBytes(memIdRef,memId).then(()=>{
         alert("File Uploaded")
         // setMemUrl(memIdRef)
      })
   };
   // ****************// const handleTransactionUploadId = () => {
   //    const uploadTask = storage.ref(`Transaction/${translip.name}`).put(translip);
   //    uploadTask.on(
   //      "state_changed",
   //      snapshot => {
   //        const progress = Math.round(
   //          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
   //        );
   //       //  setProgress(progress);
   //      },
   //      error => {
   //        console.log(error);
   //      },
   //      () => {
   //        storage
   //          .ref("images")
   //          .child(translip.name)
   //          .getDownloadURL()
   //          .then(url => {
   //            setTranUrl(url);
   //          });
   //      }
   //    );
   //  };

// function isStudent(props){
//    return <p>Your Regular Registration Fees is Rs.300</p>
// }
// function isNotStudent(props){
//    return <p>Your Regular Registration Fees is Rs.400</p>
// }
// console.log(stu);
// console.log(got);
// console.log(bp);
// console.log(ppt);
// console.log(photog)
// console.log(depcount)
// if(stu===true && mem===true){
//    return(<p>Your Regular Registration Fees is Rs.250</p>)
// }if(stu===true && mem===false){
//    return
// (<p>Your Regular Registration Fees is Rs.300</p>)
// }if(stu===false && mem===true){
//    return
// (<p>Your Regular Registration Fees is Rs.350</p>)
// }else{
//    return
// (<p>Your Regular Registration Fees is rs.400</p>)
// }
// console.log(tran)
  return (
       <>
       <div>
       <div id="register" style={{display:'flex',justifyContent:'center',background:'rgba(255, 255, 255, 0.5)' ,marginLeft:'25px',marginBottom:'40px',borderRadius:'2rem', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)',width:'95%'}}>
       {/* <HomeIcon style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)',height:'20px',marginTop:'10px',display:'flex'}}/> */}
       <Button variant="contained" color="secondary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)',height:'20px',marginTop:'10px',display:'flex'}} onClick={() => window.location.replace("/#home")}>
        Home
      </Button>
        <form className='main_form' >
          <div className='formInput'>
          <h1>Registration Fee Calculator!!</h1>
          </div>
          

         <div style={{display:'flex',justifyContent:'center'}}>
         <p><b>Step 1:-</b>
         You need to select the events that you are Interested in.
             You can select 3 events for the regular fees (2 Central Events and 1 Departmental Event Only)
            .Further selections would require an additional fee of Rs 25 per Event.
            Total number of selection of Events should not exceed 8.<br></br>
         </p>
         </div>
         <div style={{marginTop:'10px'}}>
         <input type="radio" name="student" value={stu} onClick={toggle28}/>Are you a Student of Dr.B.C. Roy Engineering College?
         </div>
         <div style={{marginTop:'10px'}}>
         <input type="radio" name="body" value={mem} onClick={toggle29}/>Are you a Member of any Professional Body(A discount of Rs50 will be provided to them)
            <div>{
               <p>Your Registration Fees is Rs.{reg}</p>
               // stu&&mem? <p>Your Regular Registration Fees is Rs.250</p>:stu&&mem===false?<p>Your Regular Registration Fees is Rs.300</p>:stu===false&&mem? <p>Your Regular Registration Fees is Rs.350</p>: <p>Your Regular Registration Fees is rs.400</p>
            // if(stu===true && mem===true){
            //       <p>Your Regular Registration Fees is Rs.250</p>
            // }if(stu===true && mem===false){
            //    <p>Your Regular Registration Fees is Rs.300</p>
            // }if(stu===false && mem===true){
            //    <p>Your Regular Registration Fees is Rs.350</p>
            // }else{
            //    <p>Your Regular Registration Fees is rs.400</p>
            // }
            }</div>
         </div>
         <h3>Central Events:Select any 2 for The Regular fees(Addition Rs.25 will be charged for further Selections.A maximum of 2 Adiitional Central Events can be selected. A maximum of 3 Candidates will be allowed in group based Events except Game Of Thrones where 4 are allowed)</h3>
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
         <div>
            <br></br>
            {cencount>2?<p>Your Additional Charges for Central Events are Rs.{(cencount-2)*25}</p>:<p>Your Additional Charges for Central Events are Rs.0</p>}
         </div>
         <div >
            <h3>Departmental Events:Select any 1 for The Regular fees(Addition Rs.25 will be charged for further Selections.A maximum of 2 Adiitional Departmental Events can be selected.)</h3>
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
         <br></br>
         <div>
         {depcount>1?<p>Your Additional Charges for Departmental Events are Rs.{(depcount-1)*25}</p>:<p>Your Additional Charges for Departmental Events are Rs.0</p>}
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
      <br></br>
      <div>
         <h1>Total Payable Amount:{(cencount>2?(cencount-2)*25:0)+(depcount>1?(depcount-1)*25:0)+reg}</h1>
         {/* {cencount>2?<p>Your Additional Charges for Central Events are Rs.{(cencount-2)*25}</p>:<p>Your Additional Charges for Central Events are Rs.0</p>}
         {depcount>1?<p>Your Additional Charges for Departmental Events are Rs.{(depcount-1)*25}</p>:<p>Your Additional Charges for Departmental Events are Rs.0</p>} */}
      </div>
         </div>
            </form>
        </div>
       </div>
       <div>
       <div style={{display:'flex',justifyContent:'center',textAlign:'center',backgroundColor:'rgba(255, 255, 255, 0.7)',width:'95%',
    borderRadius: '8px',
    padding: '15px',
    marginLeft:'15px',
   boxShadow: '10px 10px 10px rgba(208, 172, 238, 0.329)'}}>
         {/* <h3>Payment Details:</h3> */}
         <div style={{display:'flex',justifyContent:'center'}}>
        <p><b>Step 2:-</b> You need to pay the Registration Fees through NEFT.<br></br>
        You are required to take Screenshot of the Transaction id,<br></br>
        as it will be used for the Form Fill up.<br></br>
        You need Calculate the Registration Fees on the basis of your College and<br></br>
        Number of Events Selected.<br></br> 
        A discount of Rs.50 is provided to members of Professional Bodies.<br></br>
        <b>Payment Details:</b><br></br>
        Bank Name:- Axis Bank Ltd<br></br>
         Account No:- 213010100111263<br></br>
         IFSC Code:- UTIB0000213<br></br>
         Branch Name:- City Center Branch,Durgapur<br></br>
         Beneficiary:- DR B C ROY ENGINEERING COLLEGE, DURGAPUR<br></br>
         <br></br>
         *Any Kind of Misinformation can result in the cancellation of Student's Registration<br></br>
         Please be Carefull While Filling up the <b>Bank Details</b>.
         </p>
         
         </div>
         </div>
       </div>
       <div id="form" style={{display:'flex',justifyContent:'center',background:'rgba(255, 255, 255, 0.5)' ,marginTop:'40px',marginBottom:'40px',marginLeft:'25px', borderRadius:'2rem', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)',width:'95%'}}>
       {/* <HomeIcon style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)',height:'20px',marginTop:'10px',display:'flex'}}/> */}
      
          <div style={{display:"flex",justifyContent:"center",marginRight:"40px"}}>
          <h1 >REGISTER ASAP!</h1>
          </div>
          <div style={{display:'flex',justifyContent:'center',marginTop:'25px',marginRight:'25px'}}>
            <p><b>Step 3</b>.Complete the Registration form by filling up the details:</p>
            </div>
            <div style={{display:'flex',justifyContent:'center',marginTop:'20px',}}>
            <a href="https://forms.gle/eaGgv5oozCqxmTJg7">
            <Button className="butt" variant="contained" color="secondary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}} >
        REGISTER
      </Button>
      </a>
      </div>
        </div>
       </>
  );
}

export default Form;