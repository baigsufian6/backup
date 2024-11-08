
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavbarPlot';
import Home from './Pages/HomePlot';
import About from './Pages/AboutPlot';
import Career from './Pages/CareerPlot';
import Latest from './Pages/ProjectPlot';
import Contact from './Pages/ContactPlot';
import Calculator from './Pages/CalculatorPlot';
import PopularAreas from './Pages/PopularAreas'; // Import PopularAreas
import Project1 from './Pages/sulta';
import Project2 from './Pages/sultan';
import Project3 from './Pages/Sultana';





const Main = () => (
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="project" element={<Latest />} />
      <Route path="career" element={<Career />} />
      <Route path="contact" element={<Contact />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="popular-areas" element={<PopularAreas />} /> {/* New route */}
      {/* Define other routes here */}
      <Route path="/plots/" element={<PopularAreas />} />
        <Route path="/sulta" element={<Project1 />} />
        <Route path="/sultan" element={<Project2 />} />
        <Route path="/sultana" element={<Project3 />} />
    </Routes>
  </>
);

export default Main;