import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
    {
        label:'Home',
        path:'/'
    },
    {
        label:'Packages',
        path:'/packages'
    },
    {
        label:'About us',
        path:'/about-us'
    },
    {
        label:'Contact us',
        path:'/contact-us'
    },
]

const NavBar = () => {
    const [isScrolled,setIsScrolled] = useState(false);

    const handleScrolled = (value)=>setIsScrolled(value)

    useEffect(() => {
        window.addEventListener("scroll", () => handleScrolled(window.scrollY>45));
      
        return () => {
          window.removeEventListener("scroll",handleScrolled);
        };
      }, []);
  return (
        <nav className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0  ${isScrolled && 'sticky-top shadow-sm'}`}>
            <a href className="navbar-brand p-0">
                <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3" />Tourist</h1>
                {/* <img src="img/logo.png" alt="Logo"> */}
            </a>
            <button className="navbar-toggler" style={{outline:'none',border:'0px'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="bi bi-list" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    {navItems?.map((item,index)=><NavLink to={item?.path} key={index} className="nav-item nav-link" activeClassName="active" >{item?.label}</NavLink>)}
                </div>
            </div>
        </nav>

  )
}

export default NavBar
