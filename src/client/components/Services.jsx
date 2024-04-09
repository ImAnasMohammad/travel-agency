import React from 'react'
import Section from '../Layouts/Section'
import "bootstrap-icons/font/bootstrap-icons.css";

const services = [
    {
        heading:'WorldWide Tours',
        desc:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
        class:'bi bi-person-check'
    },
    {
        heading:'WorldWide Tours',
        desc:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
        class:'bi bi-hospital'
    },
    {
        heading:'WorldWide Tours',
        desc:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
        class:'bi bi-hospital'
    },
    {
        heading:'WorldWide Tours',
        desc:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
        class:'bi bi-hospital'
    },
]

const Services = () => {
  return (<Section heading={"Destination"} subHeadig={'Popular Destinations'}>
      {
        services?.map((item,index)=><SingleService  key={index} service={item}/>)
      }
  </Section>
  )
}

const SingleService = ({service})=>{
    return<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item rounded pt-3">
            <div className="p-4">
                <div className={`text-primary  m-5 h1 text-center`}>
                    <i className={`${service?.class} text-primary h1`}/>
                </div>
            <h5>{service?.heading}</h5>
            <p>{service?.desc}</p>
            </div>
        </div>
    </div>

}

export default Services