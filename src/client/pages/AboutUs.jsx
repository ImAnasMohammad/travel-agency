import React from 'react'
import Layout from '../Layouts/Layout'
import Banner from '../components/Banner'
import img from '../assets/images/contact-us.jpg'
import Team from '../components/Team'
const AboutUs = () => {
  return (
    <Layout>
      <Banner src={img} text='About Us'/>
      <Team/>
    </Layout>
  )
}

export default AboutUs