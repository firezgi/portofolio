import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile';
import CareerDevelopment from './Components/CareerDevelopment';
import Education from './Components/Education';
import ContactHab from './Components/ContactHab';
import {HashRouter,Routes,Route} from "react-router-dom"
import Footer from './Components/Footer';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Profile/>}/>
        <Route path="/CareerDevelopment" element={<CareerDevelopment/>}/>
        <Route path="/Education" element={<Education/>}/>
        <Route path="/ContactHab" element={<ContactHab/>}>        
        </Route> 
      
      </Routes>
      {/* <Footer/> */}
    </HashRouter>
  );
}

export default App;
