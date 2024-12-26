import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Service";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { fetchSiteData } from "./Api/Api";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchSiteData();

        setData(result);
      } catch (error) {
        console.error("Error fetching site info data:", error);
      }
    };

    loadData();
  }, []);

 
  return (
    <>
      {data?.menus && <Navbar menu={data?.menus} site_info={data?.site_info} />}

      {/*Implementing Routes for respective Path */}
      <Routes>
        <Route path="/" element={<Home footer_info={data} />} />
        <Route path="/services/:serviceId" element={<Services  footer_info={data}/>} />
      </Routes>
      
    </>
  );
}

export default App;
