import Navbar from "./Components/Navbar"
import {   Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
 
import Services from "./Pages/Service";
import Footer from "./Components/Footer";
 

function App() {
   
  return (
    <>
       <Navbar/>

       
            
            {/*Implementing Routes for respective Path */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/:serviceId" element={<Services />} />
              
            </Routes>
            <Footer />
    </>
  )
}

export default App
