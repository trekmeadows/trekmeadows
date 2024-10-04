import React, {useState, useRef} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Thanks from './pages/Thanks';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Blogs from './pages/Blogs';
import MainFoot from './components/MainFoot';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function App() {
  
  return (
   
    <Routes>
      {/* <Route path='/' element={ <div className="App">
      <HomePage />
    </div>} /> */}
      <Route path='/' element={<Home />} />
      <Route path='/packages' element={<Packages />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/thankyou' element={<Thanks/>} />
   
    </Routes>
  );
}

export default App;
