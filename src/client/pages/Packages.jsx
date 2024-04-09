import React from 'react'
import Layout from '../Layouts/Layout'
import Banner from '../components/Banner'
import img from '../assets/images/carousel-1.jpg'
import AllPackages from '../components/AllPackages'

const Packages = () => {
  return (
    <Layout>
      <Banner src={img} text={'Get Your all packages here...'}/>
        <AllPackages/>
    </Layout>
  )
}

export default Packages