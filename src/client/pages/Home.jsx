import React from 'react'
import Layout from '../Layouts/Layout';
import Carousel from '../components/Carousel';
import Destinations from '../components/Destinations';
import Services from '../components/Services';
import AllPackages from '../components/AllPackages';
import Booking from '../components/Booking';
import Team from '../components/Team';
import Blogs from '../components/Blogs'; 

const Home = () => {
  return (
    <Layout>
        <Carousel/>
        <Booking/>
        <Destinations/>
        <Services/>
        <AllPackages/>
        <Team/>
        <Blogs/>
    </Layout>
  )
}

export default Home