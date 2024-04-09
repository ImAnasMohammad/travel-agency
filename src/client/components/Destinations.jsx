import React from 'react'
import img1 from '../assets/images/destination-1.jpg'
import img2 from '../assets/images/destination-2.jpg'
import img3 from '../assets/images/destination-3.jpg'
import img4 from '../assets/images/destination-4.jpg'
import img5 from '../assets/images/destination-5.jpg'
import img6 from '../assets/images/destination-6.jpg'
import Section from '../Layouts/Section'


const destinations = [1,2,3,4]

const Destinations = () => {
  return (<Section heading={"Destination"} subHeadig={'Popular Destinations'}>
      {
        destinations?.map((item,index)=><SingleDestination destination={item} key={index}/>)
      }
  </Section>
  )
}

const SingleDestination =({destination})=>{
return<div className="col-lg-4 col-md-6 mb-4">
        <div className="destination-item position-relative overflow-hidden mb-2">
        <img className="img-fluid" src={img1} alt="sfsfjsldfsd" />
        <a className="destination-overlay text-white text-decoration-none" href>
            <h5 className="text-white">United States</h5>
            <span>100 Cities</span>
        </a>
        </div>
    </div>
}

export default Destinations