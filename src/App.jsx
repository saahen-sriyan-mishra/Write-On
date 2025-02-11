import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Sample from './Components/Sample/Sample';
import Service1 from './Components/Services/Service1';
import Service2 from './Components/Services/Service2';
import Service3 from './Components/Services/Service3';
import Service4 from './Components/Services/Service4';
import Service5 from './Components/Services/Service5';
import Service6 from './Components/Services/Service6';
import Service7 from './Components/Services/Service7';
import Service8 from './Components/Services/Service8';

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        
          <Route path="/sample" element={<Sample />} />
          
          
          {/* Friendly URLs redirecting to actual service paths */}
  <Route path="/article" element={<Service1 />} />
  <Route path="/blog" element={<Service2 />} />
  <Route path="/casestudy" element={<Service3 />} />
  <Route path="/newsletter" element={<Service4 />} />
  <Route path="/copywriting" element={<Service5 />} />
  <Route path="/emailers" element={<Service6 />} />
  <Route path="/website-content" element={<Service7 />} />
  <Route path="/social-media" element={<Service8 />} />
  
  {/* Actual service paths */}
  <Route path="/service1" element={<Service1 />} />
  <Route path="/service2" element={<Service2 />} />
  <Route path="/service3" element={<Service3 />} />
  <Route path="/service4" element={<Service4 />} />
  <Route path="/service5" element={<Service5 />} />
  <Route path="/service6" element={<Service6 />} />
  <Route path="/service7" element={<Service7 />} />
  <Route path="/service8" element={<Service8 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
