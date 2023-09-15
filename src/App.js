import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import UxDesign from './Components/UxDesign';
import Hero from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';
import Frontend from './Components/Frontend';

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
                <Route path='/contact-me' element={<Contact/>}/>  
            </Routes>
          

          <Nav/>
          <Hero/>
        </div>
      
    </div>
  );
}

export default App;
