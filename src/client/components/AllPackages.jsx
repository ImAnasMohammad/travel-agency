import React from 'react'
import Section from '../Layouts/Section'

import img1 from '../assets/images/package-1.jpg'
import img2 from '../assets/images/package-2.jpg'
import img3 from '../assets/images/package-3.jpg'
import img4 from '../assets/images/package-4.jpg'
import img5 from '../assets/images/package-5.jpg'
import img6 from '../assets/images/package-6.jpg'


const packages =[
    {
        place:'sdfsfs',
        days:2,
        persons:3,
        desc:'ksfsfjs fsfkjdfsfj sfksjfsjfksdf sfksdfjsdklf',
        img:img1,
        rating:4.3,
        totalRates:230,
        price:'$230'
    },
    {
        place:'sdfsfs',
        days:2,
        persons:3,
        desc:'ksfsfjs fsfkjdfsfj sfksjfsjfksdf sfksdfjsdklf',
        img:img1,
        rating:4.3,
        totalRates:230,
        price:'$230'
    },
    {
        place:'sdfsfs',
        days:2,
        persons:3,
        desc:'ksfsfjs fsfkjdfsfj sfksjfsjfksdf sfksdfjsdklf',
        img:img1,
        rating:4.3,
        totalRates:230,
        price:'$230'
    },
]

const AllPackages = () => {
  return (
    <Section heading={' Packages'} subHeadig={'Awesome Packages'}>
        {
            packages?.map((item,index)=><SinglePackage key={index} item={item}/>)
        }
    </Section>
  )
}


const SinglePackage = ({item})=>{
    return<div className="col-lg-4 col-md-6 mb-4 ">
    <div className="package-item bg-white mb-2 overflow-hidden">
      <img className="img-fluid" src={item?.img} alt={item?.desc} />
      <div className="p-4">
        <div className="d-flex justify-content-between mb-3">
          <small className="m-0 d-flex gap-1"><i class="bi bi-geo-alt text-primary"></i>{item?.place}</small>
          <small className="m-0 d-flex gap-1"><i className="bi bi-calendar-event text-primary" />{item?.days} days</small>
          <small className="m-0 d-flex gap-1"><i className="bi  bi-people text-primary" />{item?.persons} Person</small>
        </div>
        <a className="h5 text-decoration-none" href>{item?.desc}</a>
        <div className="border-top mt-4 pt-4">
          <div className="d-flex justify-content-between">
            <h6 className="m-0 d-flex gap-1"><i className="bi bi-star-fill text-primary" />{item?.rating} <small>({item?.totalRates})</small></h6>
            <h5 className="m-0">{item?.price}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default AllPackages