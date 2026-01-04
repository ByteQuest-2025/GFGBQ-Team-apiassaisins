import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Complaint from './pages/Complaint';
import Dashboard from './pages/Dashboard';
import WaterDepartmentDashboard from './pages/WaterDepartmentDashboard';
import InfrastructureDepartmentDashboard from './pages/InfrastructureDepartmentDashboard';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="bg-[#f8fafc]">

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <About />

            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Contact />

            </>
          }
        />

        <Route path='/complaint' element={<Complaint />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/department/water' element={<WaterDepartmentDashboard />} />
        <Route path='/department/infrastructure' element={<InfrastructureDepartmentDashboard />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
