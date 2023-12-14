import React from 'react'
import './Banner.css'
import video from './video.mp4'
import logo from './bcreclogo.png'
import Button from '@mui/material/Button';
import logo1 from './biglogo.png'
import Form from './Form';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { display } from '@mui/system';
import ieee from './ieee.png'
import iete from './iete.png'
import csi from './csi.png'
import Timer from './daycount'
import eventcard from './EventCard'
import map from './map.png'
import './corecomm.css'
import { TextDecrease } from '@mui/icons-material';
import background from './background.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import dip from './dip.png';
import sup from './sup.png'
import top from './top-logo.png'
// import spoback from './spoback.webp'
function Banner() {
  function handleMessage(){
    alert("This part of the Website is under maintainance")
  };
  function contact(){
    alert(`Convenor: Prof.(Dr.) Rajib Banerjee, email:rajib.banerjee@bcrec.ac.in
Co-Convenor: Prof.(Dr.) Abhijit Banerjee, email:abhi88mcet@gmail.com
Co-Convenor: Prof. Syed Zahir Hasan, email:zahir.hasan@bcrec.ac.in


Student Point Of Contact:
Harsh Raj Gupta, email:harshrajg098@gmail.com
Swarup Sinha, email:sinhaswarup82@gmail.com
Location: https://rb.gy/6vra
    `)
  }
  return (
    <>
    <div id="home" className="Banner">
      <div className="vid">
        <img className="background" src={background} >
        </img>
        {/* <h1>Heloo</h1> */}
      </div>
      <div className="small-logo" style={{display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
      <img src={logo} alt="logo" style={{display:'flex',justifyContent:'flex-start',marginTop:"10px",height:'80px',marginRight:'00px',marginLeft:'20px'}}></img>
      </div>
      <div>
        <button type="submit" class="button" style={{display:"flex",justifyContent:"center",position:'fixed'}}>Registrations are now Closed</button>
        </div>
      <div >
      <marquee width="70%" direction="left" height="60px" marginTop="0px">
<h1>Our Sponsors</h1>
</marquee>
      </div>
      <div style={{display:'flex',justifyContent:'center',borderRadius:'25px',height:'80px',marginRight:'00px',marginLeft:'00px',marginBottom:'0px'}}>
        <div>
      
        <img src={ieee} alt="logo" style={{marginRight:'10px',height:'80px',marginTop:'0px',marginBottom:'0px'}}></img>
      <img src={iete} alt="logo" style={{marginRight:'10px',height:'80px',marginTop:'0px',marginBottom:'0px'}}></img>
      <img src={csi} alt="logo" style={{marginRight:'10px',height:'80px',marginTop:'0px',marginBottom:'0px'}}></img>
      {/* <img src={logo} alt="logo" style={{marginRight:'20px',height:'200px'}}></img> */}
        </div>
      </div>

    <div style={{display:"flex",justifyContent:"flex-end",marginRight:"0px",marginTop:"-150px"}}>
    <Timer style={{display:"flex", justifyContent:"center"}}
      countdownTimestampMs={1682397000000}/>
      </div>
      <div >
    <div className="main_banner">
    {/* style={{marginTop:'160px'}} */}
      <div className='fb'>
      <a href="https://www.facebook.com/horizon2k23">< FacebookOutlinedIcon fontSize="large"  style={{margin:'0px 30px',color:"#578fff"}}/></a>
      <a href="https://instagram.com/horizon2k23?igshid=ZDdkNTZiNTM=">< InstagramIcon fontSize="large"  style={{margin:'0px 30px',color:"#C13584"}}/></a>
      </div> 
      <div className='centralPhoto' style={{display:'flex',justifyContent:'flex-start'}}>
       <img style={{height:'200px',width:'200px',marginLeft:'0px'}} src={dip}></img>
      
    <div style={{width:'200px',marginLeft:'0px',marginTop:'0px',textAlign:'justify'}}><p style={{color:'white',marginTop:'0px'}}><b style={{color:'orange'}}>CHIEF GUEST, Shri Diptendu Ghosh's, ED (Works) Profile:</b><br></br>Durgapur Steel Plant</p>
      <p style={{color:'white'}}>Shri Diptendu Ghosh, a Mechanical Engineer with a degree in B.Tech from National Institute of Technology in the year 1989, joined SAIL at</p>
    </div>
    </div>
    <div style={{width:'400px',marginLeft:'0px',marginTop:'0px',textAlign:'justify'}}>
      <p style={{color:'white'}}> Bokaro Steel Plant in 1990. 

With a rich experience spanning over 33 Years in three Plants viz; BSL, ISP & DSP, he has worked both at frontline as well as led from front. He holds a diverse experience ranging from Blast Furnace, Sinter Plant, SMS, CCP, Mills, Utilities area, Maintenance and overall plant operation.

Under his able leadership in BSL, ISP & DSP as a hard-core mechanical maintenance man, he played a major role for improving reliability of equipment, revamping of plant for complete turnaround of production and profitability. 

The journey of his leadership and excellence still continues.</p>
    </div>
    <div style={{display:'flex',justifyContent:'flex-end',marginTop:'-450px'}}>
       <img style={{display:'flex',justifyContent:'flex-end',height:'200px',width:'200px',marginRight:'0px'}} src={sup}></img>
      
    
    <div style={{width:'200px',marginRight:'-400px',marginTop:'0px',textAlign:'justify'}}>
      <p style={{color:'white'}}> <b style={{color:'orange'}}>DISTINGUISHED GUEST, Suprakash Mukherjee's Profile:</b> an Electrical Engineer with a degree in B.E. from BCREC in the year 2004. 
He joined SAIL, Bhilai Steel Plant in the year 2007 as Management </p>
    </div>
    <div style={{display:'flex',justifyContent:'flex-end',width:'400px',marginRight:'0px',marginTop:'200px',textAlign:'justify'}}>
      <p style={{color:'white'}}>Trainee (Tech.). He has got a work experience of 16 years in SAIL. Currently he is posted at Electro-Technical Laboratory in IISCo Steel Plant, Burnpur with a designation of Assistant General Manager. 
His experiences are in fields of HT protection systems, HT switch-gear testing, relay coordination, LT protection schemes. He worked in two different units of SAIL. Presently he serves as departmental safety officer of Central Electrical Maintenance alongwith his main job profile.
</p>
    </div>
    </div>
      <div className="center-logo" style={{display:"flex",justifyContent:"center",marginBottom:"0px",marginTop:"-320px"}}>
        <img src={top}></img>
      </div>
      <div className="center-logo" style={{display:"flex",justifyContent:"center",marginBottom:"0px",marginTop:"100px"}}>
        <img src={logo1} alt="logo"></img>
      </div>
      <div style={{display:"flex",justifyContent:"center",marginTop:'100px',marginBottom:'0px'}}>
        <table>
          <tr>
          <td>
      <Button className="butt" variant="contained" color="secondary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}} onClick={() => window.location.replace("/#home")}>
        HOME
      </Button>
      </td>
      <td>
      <Button className="butt" variant="contained" color="secondary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)',display:'flex'}} onClick={() => window.location.replace("/#eventcard")}>
        Events
      </Button>
      </td>
      <td>
      <Button className="butt" variant="contained" color="secondary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}} onClick={() => window.location.replace("/#register")}>
        REGISTER
      </Button>
      </td>
      <td>
      <Button className="butt" variant="contained" color="secondary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}} onClick={() => window.location.replace("/#faculty")}>
        Faculty Advisors
      </Button>
      </td>
      <td>
      <Button className="butt" variant="contained" color="secondary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}} onClick={handleMessage}>
        Judges
      </Button>
      </td>
      <td>
      <Button className="butt" variant="contained" color="secondary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}} onClick={() => window.location.replace("/#names")}>
        Student Coordinators
      </Button>
      </td>
      <td>
      <Button className="butt" variant="contained" color="secondary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}} onClick={() => window.location.replace("/#TS")}>
        Schedule
      </Button>
      </td>
      <td>
      <Button className="butt" variant="contained" color="secondary" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}} onClick={contact}>
        Contact Us
      </Button>
      </td>
      </tr>
      </table>
      </div>
     </div>
    </div>
      </div>
      <div style={{backgroundColor:"rgba(255, 255, 255, 0.5)",borderRadius:"20px",marginRight:"260px",marginLeft:"260px"}}>
      <div>
      <h2 style={{display:"flex",justifyContent:"center", color:"blue"}}>Patron: Sri. Tarun Bhattacharya, General Secretary</h2>
      </div>
      <div>
      <h2 style={{display:"flex",justifyContent:"center", color:"blue"}}> Chairperson: Prof. (Dr.) Sanjay S. Pawar, Principal </h2>
      </div>
      <div>
      <h2 style={{display:"flex", justifyContent:"center",color:"blue"}}> Working Head: Prof. (Dr.) K. M. Hossain, Vice-Principal</h2>
      {/* <h2 style={{display:"flex", color:"rgb(123, 208, 250)"}}> Chairperson: Prof. (Dr.) Sanjay S. Pawar, Principal </h2> */}
      </div>
      </div>
      {/* <h1 style={{}}>Advisory Board</h1> */}
      <div id="faculty" className='comm-list' Style={{color:"pink"}}>
            {/* <img src={photo}></img> */}
            <table style={{borderRadius:'20px',color: 'black',fontWeight:'bold',backgroundColor:'rgba(255, 255, 255, 0.5)'}}>
              <tr>
                <td><u>Advisory Board:</u></td>
                <td><u>Convenor (Tech Fest)</u></td>
              </tr>
              <tr>
                <td>Prof. (Dr ) Arindam Mondal, Registrar,BCREC </td>
                <td>Prof. (Dr.) Rajib Banerjee (ECE)</td>
        
              </tr>
              <tr>
                <td>Prof. (Dr.) Rajdeep Ray (Dean, SW)</td>
                <td><u>Joint   Convenor   (Tech    Fest): </u></td>
          
              </tr>
              <tr>
                <td>Dr. Alok Kahali, Head (Head Admin.)</td>
                <td>Prof. (Dr.) Abhijit Banerjee (ECE) </td>
         
              </tr>
              <tr>
                <td>Sri Amitava Chakravarty (Chief-Crop. Affairs )</td>
                <td>Prof. Syed Zahir Hasan (CSE) </td>
      
              </tr>
              <tr>
                <td></td>
                <td><u>Treasurer (Tech Fest): </u></td>
              
              </tr>
              <tr>
                <td></td>
                <td>Prof. Sabbir Reza Tarafdar (CSE)</td>
           
              </tr>
            </table>
        </div>
      <h1 style={{}}>Core Committee Members</h1>
        <div id="faculty" className='comm-list'>
            {/* <img src={photo}></img> */}
            <table style={{borderRadius:'20px',color: 'black',fontWeight:'bold',backgroundColor:'rgba(255, 255, 255, 0.5)'}}>
              <tr>
                <td>Prof. (Dr.) N. N. Pathak, Dean HoD(ECE) </td>
                <td>Prof. (Dr.) Chandan Chattoraj, HoD (ME) </td>
              </tr>
              <tr>
                <td>Prof. (Dr.) Sanjay Sengupta, HoD (CE) </td>
                <td>Prof. (Dr.)  Rajkumar Samanta, Ho D (CSD) </td>
        
              </tr>
              <tr>
                <td>Prof. (Dr.) Susanta Dutta HoD (EE)</td>
                <td>Prof. (Dr.) Somroop Siddhanta, HoD (FMS) </td>
          
              </tr>
              <tr>
                <td>Prof. (Dr.) Arindam Ghosh, HoD (CSE) </td>
                <td>Prof. (Dr.) Suman Bhattacharjee, HoD (IT)</td>
         
              </tr>
              <tr>
                <td>Prof. (Dr.) Gour Sundar Mitra Thakur, HoD (AlML) </td>
                <td>Prof. (Dr.) Chandan Bandyopadhyay, HoD (Data Sc.)</td>
      
              </tr>
              <tr>
                <td>Prof‘. (Dr.) Saurav Ranjan Das, HoD (BSH)</td>
                <td>Prof. (Dr.) Pabitra Kumar Dey, HoD (MCA) </td>
              
              </tr>
              <tr>
                <td>Prof. Subhashis Pal, (l/C Exam/BSH)</td>
                <td>Prof. Saindhab Chattaraj (CSE) </td>
           
              </tr>
              <tr>
                <td>Prof. Soumyadip Das (CE) </td>
                <td>Prof. Amit Kotal (CE)</td>
        
              </tr>
              <tr>
                <td>Sri. Ravi Sharma„ Sr. Manager (Finance) </td>
                <td>Sri. Rajesh Chatterjee, Sr. Manager (Admin)</td>
         
              </tr>
              <tr>
                <td>Sri Shouvick Kumar Chandra(Sr. Manager PR)</td>
                <td> Sri. U. K. Sharma, Sr. Manager (Crop. Affaires & Estate) </td>
 
              </tr>
              <tr>
                <td>Sri. Pranab Karmakar, Accounts Officer</td>

              </tr>
            </table>
        </div>
      <h1 style={{}}>Faculty Advisors</h1>
        <div id="faculty" className='comm-list'>
            {/* <img src={photo}></img> */}
            <table style={{borderRadius:'20px',color: 'black',fontWeight:'bold',backgroundColor:'rgba(255, 255, 255, 0.5)'}}>
              <tr>
                <td>Prof.(Dr.) Taniya Chakraborty</td>
                <td>Prof.(Dr.) Jaya Mukhopadhyay</td>
                <td>Prof.Debadrita Sen</td>
              </tr>
              <tr>
                <td>Prof.(Dr).Sourav Bhattacharjee</td>
                <td>Prof. Anandaprova Majumdar</td>
                <td>Prof.Kalpana Roy</td>
              </tr>
              <tr>
                <td>Prof.Nasim Anjum Hoque</td>
                <td>Prof.Banashree Chatterjee</td>
                <td>Prof.(Dr.) Dola Sinha</td>
              </tr>
              <tr>
                <td>Prof.(Dr.) Ritu Rani Maity</td>
                <td>Prof.Krishna Roy,</td>
                <td>Prof. Dipta Chaudhuri</td>
              </tr>
              <tr>
                <td>Prof.(Dr.) Aloke Saha</td>
                <td>Prof.(Dr) Anirban Chattopadhyay</td>
                <td>Prof.Surajit Battabyal</td>
              </tr>
              <tr>
                <td>Prof.Pradipta Sarkar</td>
                <td>Prof.(Dr.) Sanjay Saha</td>
                <td>Prof.(Dr.) Soumen Mallick</td>
              </tr>
              <tr>
                <td>Prof.Biswadev Goswami</td>
                <td>Prof.Monalisa Chakraborty</td>
                <td>Prof.Md. Keramot Hossain Mondal</td>
              </tr>
              <tr>
                <td>Prof. Angshuman Mohanty</td>
                <td>Prof.Sovan Bhattacharya</td>
                <td>Prof.Atin Mukherjee</td>
              </tr>
              <tr>
                <td>Prof.(Dr). Arijit Banerjee</td>
                <td>Prof. Chanchal Das</td>
                <td>Prof.(Dr). Pabitra Kumar Mondal    </td>
              </tr>
              <tr>
                <td>Prof. Chitta Sahana</td>
                <td> Prof. Subhajit Bhattacharjee</td>
                <td>Prof. Md Hamjala Alam</td>
              </tr>
              <tr>
                <td>Prof. Arijit Kumar Banerji</td>
              </tr>
            </table>
        </div>
        {/* <div className='webd1'>
        <h2>Chief Guest</h2>
    </div> */}
    {/* <div className='centralPhoto'>
        <Card sx={{ maxWidth: 800 }} style={{margin:'10px',borderRadius:'2rem'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          
          image={dip}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h6" component="div">
          Profile of Shri Diptendu Ghosh, ED (Works) : Durgapur Steel Plant
          </Typography>
          <Typography style={{textAlign:'center'}} variant="body1" color="text.secondary">
          
          </Typography>
          <Typography style={{textAlign:'center'}} variant="h6" color="text.secondary">
          Shri Diptendu Ghosh, a Mechanical Engineer with a degree in B.Tech from National Institute of Technology in the year 1989, joined SAIL at Bokaro Steel Plant in 1990. 

With a rich experience spanning over 33 Years in three Plants viz; BSL, ISP & DSP, he has worked both at frontline as well as led from front. He holds a diverse experience ranging from Blast Furnace, Sinter Plant, SMS, CCP, Mills, Utilities area, Maintenance and overall plant operation.

Under his able leadership in BSL, ISP & DSP as a hard-core mechanical maintenance man, he played a major role for improving reliability of equipment, revamping of plant for complete turnaround of production and profitability. 

The journey of his leadership and excellence still continues.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div> */}
    </>
  )
}

export default Banner