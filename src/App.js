import './App.css';
import Banner from './Components/Banner';
import EventCard from './Components/EventCard';
import Form from './Components/Form';
import Names from './Components/Names';
import Footer from './Components/Footer';
import Core from './Components/corecomm';
import Form1 from './Components/Form1';
import Neft from './Components/neft';
import Timer from './Components/daycount'
import Hitcounter from './Components/hitcounter'
function App() {
  return (
      <>
      <Banner/>
      {/* <Core/> */}
      <EventCard/>
      {/* <Form1/> */}
      {/* <Neft/> */}
      <Form/>
      <Names/>
      {/* <Hitcounter/> */}
      
      <Footer/>
      </>
  );
}

export default App;
