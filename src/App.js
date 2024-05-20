
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

// const Home = React.lazy(()=>import('./client/pages/Home'))

// client pages 


import Home from './client/pages/Home';
import Packages from './client/pages/Packages';
import AboutUs from './client/pages/AboutUs';
import ContactUs from './client/pages/ContactUs';


// admin pages 

import DashBoard from './admin/pages/DashBoard';
import Customers from './admin/pages/Customers';
import Bookings from './admin/pages/Bookings';
import Destinations from './admin/pages/Destinations';
import Tours from './admin/pages/Tours';
import Feedbacks from './admin/pages/Feedbacks';
import Settings from './admin/pages/Settings';

function App() {
  return (
    <Routes>
      {/* client pages  */}
      <Route path="/" element={<React.Suspense fallback={<h1>Loading</h1>}><Home/></React.Suspense>}/>
      <Route path="/packages" element={<React.Suspense fallback={<h1>Loading</h1>}><Packages/></React.Suspense>}/>
      <Route path="/about-us" element={<React.Suspense fallback={<h1>Loading</h1>}><AboutUs/></React.Suspense>}/>
      <Route path="/contact-us" element={<React.Suspense fallback={<h1>Loading</h1>}><ContactUs/></React.Suspense>}/>


      {/* admin pages  */}
      <Route path="/admin/dashboard" element={<React.Suspense fallback={<h1>Loading</h1>}><DashBoard/></React.Suspense>}/>
      <Route path="/admin/bookings" element={<React.Suspense fallback={<h1>Loading</h1>}><Bookings/></React.Suspense>}/>
      <Route path="/admin/customers" element={<React.Suspense fallback={<h1>Loading</h1>}><Customers/></React.Suspense>}/>
      <Route path="/admin/destinations" element={<React.Suspense fallback={<h1>Loading</h1>}><Destinations/></React.Suspense>}/>
      <Route path="/admin/tours" element={<React.Suspense fallback={<h1>Loading</h1>}><Tours/></React.Suspense>}/>
      <Route path="/admin/feedbacks" element={<React.Suspense fallback={<h1>Loading</h1>}><Feedbacks  /></React.Suspense>}/>
      <Route path="/admin/settings" element={<React.Suspense fallback={<h1>Loading</h1>}><Settings  /></React.Suspense>}/>
    </Routes>
  );
}

export default App;
