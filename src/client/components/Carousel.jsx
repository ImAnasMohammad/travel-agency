import React, { useState } from 'react'
import img1 from '../assets/images/carousel-1.jpg'
import img2 from '../assets/images/carousel-2.jpg'

const slides = [
    {
        img:img1,
        title:'Tour and travel',
        subTitle:'Discover Amazing Places With Us',
        link:''
    },
    {
        img:img2,
        title:'Tour and travel',
        subTitle:'Discover Amazing Places',
        link:''
    },
]
const Carousel = () => {
    const [active,setActive] = useState(0);
    

    const handleClick = (type)=>{
        if(type){
            if(active===slides?.length-1){
                setActive(0);
                return;
            }
            setActive(prev=>prev+1);
            return;
        }
        if(active<0){
            setActive(slides?.length-1);
            return;
        }
        setActive(prev=>prev-1);

    }
  return (
    <div className="container-fluid p-0 img-slider">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {
                    slides?.map((slide,index)=><Slide slide={slide} active={active===index} key={index} index={index}/>)
                }
            </div>
            <div class="carousel-control-prev" data-slide="prev">
                <div className="btn btn-dark" style={{width: 45, height: 45}} onClick={()=>handleClick(false)}>
                    <span className="carousel-control-prev-icon mb-n2" />
                </div>
            </div>
            <div class="carousel-control-next" data-slide="prev">
                <div className="btn btn-dark" style={{width: 45, height: 45}} onClick={()=>handleClick(true)}>
                    <span className="carousel-control-next-icon mb-n2" />
                </div>
            </div>
        </div>
    </div>

  )
}

const Slide = ({slide,active,index})=>{

    return<div className={`carousel-item ${active && 'active'}`}>
        <div className="slider-image-wrapper">
            <img className="w-90 ratio ratio-16x9" src={slide?.img} alt={slide?.title} />
        </div>
        <div className="z-2 carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-1" style={{maxWidth: 900}}>
                { slide?.title && <h4 className="text-white text-uppercase mb-md-3">{slide?.title}</h4>}
                { slide?.subTitle && <h1 className="display-3 text-white mb-md-4">{slide?.subTitle}</h1>}
            </div>
        </div>
</div>
}

export default Carousel