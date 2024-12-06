import Navbar from "./Components/Navbar"
import {   Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
 

function App() {
   
  return (
    <>
       <Navbar/>

       
            
            {/*Implementing Routes for respective Path */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About/>}/>
                    
                
                <Route path="/contact-us" element={<Contact/>} />
            </Routes>
         
    </>
  )
}

export default App
