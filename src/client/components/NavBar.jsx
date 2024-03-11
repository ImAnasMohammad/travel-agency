import React from 'react'

const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href className="navbar-brand p-0">
                <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3" />Tourist</h1>
                {/* <img src="img/logo.png" alt="Logo"> */}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Services</a>
                <a href="package.html" className="nav-item nav-link">Packages</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                    <a href="destination.html" className="dropdown-item">Destination</a>
                    <a href="booking.html" className="dropdown-item">Booking</a>
                    <a href="team.html" className="dropdown-item">Travel Guides</a>
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <a href className="btn btn-primary rounded-pill py-2 px-4">Register</a>
            </div>
        </nav>

  )
}

export default NavBar
