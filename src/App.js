import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import UxDesign from './Components/UxDesign';
import Hero from './Components/Hero';
import About from './Components/About';
import Resume from './Components/Resume';
import Frontend from './Components/Frontend';
import Footer from './Components/Footer';

import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">

        <div className="container">
            <Routes>
                <Route path= "/" element={<Home/>}/>
                <Route path= "/ux-design" element={<UxDesign/>}/>
                <Route path= "/front-end" element={<Frontend/>}/>
                <Route path='/about-me' element={<About/>}/>
                <Route path='/my-resume' element={<Resume/>}/>  
            </Routes>
          
            
          
        </div>
      
    </div>
  );
}

export default App;
