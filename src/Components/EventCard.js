import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Grid} from '@material-ui/core'
import './Card.css'
import TrickyCircuits from './TrickyCircuits.jpeg'
import './EventCard.css'
import photog12 from './PHOTOGRAPHY12.png'
import circuitrix1 from './circuitrix1.jpg'
import techidea from './TechIdea.jpg'
import Technovation from './Technovation.jpeg'
import robotrix1 from './robotrix1.jpeg'
import techmodel from './Techmodel.png'
import embedit1 from './EMBEDED-IT.png'
import startup from './Startup.png'
import got_1 from './GOT_1.png'
import OnSpot from './OnSpot.png'
// import Papyrus1 from './papyrus-poster.png'
import cinetrix1 from './cinetrix1.png'
import Techskit from './Techskit.png'
import photo from './logo.png'
import flextempo from './flextempo.png'
import wacode from './wannacode.png'
import { Button, CardActionArea, CardActions } from '@mui/material';
import devcon from './devcon.jpg';
import hackmaze from './hackmaze.png'
import dt_d from './dt_d.png'
import blindcode from './blindcode.png'
import system from './system.png'
import graphic from './graphic.png'
import lang from './language.png'
import web_d from './web_d.png'
import papy from './papyrus.png'
import brug_it from './brugit.jpg'
import mechvation from './mechvation.jpg'
import autocad from './autocad.jpg'
import auto from './auto.png'
import mech from './mech.png'
import brug from './Brug.png'
import prad from './prad.png'
import acwork from './acwork.png'
import dtd from './dtd.png'
import HackM from './HackM.png'
import wcode from './wcode.png'
import webd from './webd.png'
import embed from './embed.png'
import cirtrix from './cirtrix.png'
import techquiz from './techquiz.png'
import treas from './treas.png'
import robot from './robot.png'
import elecq from './elecq.png'
import cine from './cine.png'
import photog from './photog.png'
import horizon23 from './horizon23.jpg'
import got from './got.png'
import ppt from './ppt.png'
import bp from './bp.png'
import { PhotoAlbumOutlined } from '@mui/icons-material';
import dip from './dip.png'
function EventCard() {
  return (
    <>
    <div id='eventcard' className='main_card'>
   
    
    <div className='Card' style={{margin:'80px'}}>
      <Card sx={{ maxWidth: 600 ,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={horizon23}
          alt="fest photo"
        />
        <CardContent>
          

          <Typography  gutterBottom variant="h4" component="div" style={{textAlign:'center',}}>
          WE ARE BACK
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
          Welcome to largest yearly event of BCREC family.
           Take part in all amazing events and win prizes and show the world. Don't miss out a great opportunity learn and enrich your skill-set.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={Techskit}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Techskit
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	This event includes representation of technological ideas where participation need to show their technical ideas in the form of scripts.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
    
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={cinetrix1}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            CINETRIX
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	A short film making contest where participation have to make short film using their own ideas and present it to the judges.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={papy}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Papyrus
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Participants need to present paper on any topics according to his/her choice in IEEE format. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={flextempo}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Flashextempo
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={OnSpot}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            On Spot Quiz
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	A normal quiz competition based on general topics will be held on the same days in a sudden gathering manner.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={photog12}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Photography
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Contest allowed only mobile photography (Theme based) using their own skills and editing. 
NOTE:  DSLR or any camera photography is strictly prohibited.

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={got_1}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Game Of Thrones
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Contest is totally based on gaming skills. Participants can use his/her laptop or mobile for the function of performing it.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={startup}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Business Model Canvas
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Event aims to get proper investigated business or any startup plans/concept from participants.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea> 
        <CardMedia
          component="img"
          height="335"
          image={techmodel}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Tech-Model
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Technical model presentation.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={robotrix1}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            RoboTrix
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	This competition include three contest : robot soccer, detection robot and robot war where participation can take part in any of them to meet the winning position.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{maxWidth:600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={Technovation}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Technovation
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	A PPT presentation competition on any electronic related project.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={TrickyCircuits}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
           Tricky Circuits
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	A Puzzle of circuits will be given, Participants need to solve the puzzle correctly in the given specific time.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={techidea}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Tech Idea(PPT Presentstion)
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	This event is supposed to accept ideas on any electrical project in the form of presentation.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={circuitrix1}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            CircuiTrix
          </Typography>
          <Typography variant="body2" color="text.secondary">
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={embedit1}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Embeded-IT
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Events based on coding problems related to microprocessor and microcontroller.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={devcon}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Devcon
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Showcase of UI/UX design interface for web or mobile application.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={wacode}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
          Wanna Code
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Coding  competition  in terms of fastest least backspace.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={web_d}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Web-D
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Website design completion using any languages(C,C++ or python/html/CSS)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={hackmaze}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
          HackMaze
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Over a maze or grid problems to find out the best solutions.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={dt_d}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
          Dare To Debug
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Code debug problem will be given, participants need to correct and implement it. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={blindcode}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
          Blind Code
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Contest related to working on a code without running it  based on algorithms, data structure and problem solving. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={system}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
          System Design
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Puzzles of system architecture, components and interface. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={graphic}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
          Graphic Design
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Competition include 3-d modelling, design, graphics etc. (canva recommended). 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={lang}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Language Identification
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Code/syntax will be given. participants needs to determine from which language  this code is..(e.g. python, java, Julia, R etc.)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={brug_it}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Brug It
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Structural design and drawing contest.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={mechvation}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
            Mechvation
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	This contest include two events first mechanical and drawing design and second is tricky question competition.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='Card' style={{margin:'80px'}}>
    <Card sx={{ maxWidth: 600,boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.9)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="335"
          image={autocad}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="div">
          AutoCAD Design contest
          </Typography>
          <Typography variant="body2" color="text.secondary">
          	Contest of designing and drafting  in cad software.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    </>
  )
}

export default EventCard