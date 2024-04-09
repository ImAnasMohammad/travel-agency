
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

// const Home = React.lazy(()=>import('./client/pages/Home'))

import Home from './client/pages/Home';
import Packages from './client/pages/Packages';
import AboutUs from './client/pages/AboutUs';
import ContactUs from './client/pages/ContactUs';



function App() {
  return (
    <Routes>
      <Route path="/" element={<React.Suspense fallback={<h1>Loading</h1>}><Home/></React.Suspense>}/>
      <Route path="/packages" element={<React.Suspense fallback={<h1>Loading</h1>}><Packages/></React.Suspense>}/>
      <Route path="/about-us" element={<React.Suspense fallback={<h1>Loading</h1>}><AboutUs/></React.Suspense>}/>
      <Route path="/contact-us" element={<React.Suspense fallback={<h1>Loading</h1>}><ContactUs/></React.Suspense>}/>
    </Routes>
  );
}

export default App;
