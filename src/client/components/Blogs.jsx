import React from 'react'
import Section from '../Layouts/Section'

import blog1 from '../assets/images/blog-1.jpg'
import blog12 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'

const Blogs = () => {
  return (
    <Section heading={'Our Blogs'} subHeadig={'Latest Blogs'}>
<div className="row pb-3">
  <div className="col-lg-4 col-md-6 mb-4 pb-2">
    <div className="blog-item">
      <div className="position-relative">
        <img className="img-fluid w-100" src={blog1} alt />
        <div className="blog-date">
          <h6 className="font-weight-bold mb-n1">01</h6>
          <small className="text-white text-uppercase">Jan</small>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="d-flex mb-2">
          <a className="text-primary text-uppercase text-decoration-none" href>Admin</a>
          <span className="text-primary px-2">|</span>
          <a className="text-primary text-uppercase text-decoration-none" href>Tours &amp; Travel</a>
        </div>
        <a className="h5 m-0 text-decoration-none" href>Dolor justo sea kasd lorem clita justo diam amet</a>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 mb-4 pb-2">
    <div className="blog-item">
      <div className="position-relative">
        <img className="img-fluid w-100" src={blog12} alt />
        <div className="blog-date">
          <h6 className="font-weight-bold mb-n1">01</h6>
          <small className="text-white text-uppercase">Jan</small>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="d-flex mb-2">
          <a className="text-primary text-uppercase text-decoration-none" href>Admin</a>
          <span className="text-primary px-2">|</span>
          <a className="text-primary text-uppercase text-decoration-none" href>Tours &amp; Travel</a>
        </div>
        <a className="h5 m-0 text-decoration-none" href>Dolor justo sea kasd lorem clita justo diam amet</a>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 mb-4 pb-2">
    <div className="blog-item">
      <div className="position-relative">
        <img className="img-fluid w-100" src={blog3} alt />
        <div className="blog-date">
          <h6 className="font-weight-bold mb-n1">01</h6>
          <small className="text-white text-uppercase">Jan</small>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="d-flex mb-2">
          <a className="text-primary text-uppercase text-decoration-none" href>Admin</a>
          <span className="text-primary px-2">|</span>
          <a className="text-primary text-uppercase text-decoration-none" href>Tours &amp; Travel</a>
        </div>
        <a className="h5 m-0 text-decoration-none" href>Dolor justo sea kasd lorem clita justo diam amet</a>
      </div>
    </div>
  </div>
</div>

    </Section>
  )
}



export default Blogs