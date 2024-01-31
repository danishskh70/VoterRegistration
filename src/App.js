import React from 'react'
import Home from './components/Home';
import VoterNavbar from './components/VoterNavbar';
import VoterFooter from './components/VoterFooter';
import VoterLogin from './components/VoterLogin';
import VoterRegister from './components/VoterRegister';
import VoterAbout from './components/VoterAbout';
import VoterContact from './components/VoterContact';
import VoterLogOut from './components/VoterLogOut';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VoterNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<VoterLogin />} />
          <Route path="/register" element={<VoterRegister />} />
          <Route path="/about" element={<VoterAbout />} />
          <Route path="/contact" element={<VoterContact />} />
          <Route path="/logout" element={<VoterLogOut />} />
        </Routes>
        <VoterFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
