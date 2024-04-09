import React from 'react'

const Section = ({heading,subHeadig,children}) => {
  return (<div className="container-fluid py-5">
  <div className="container pt-5 pb-3">
    <div className="text-center mb-3 pb-3">
      <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>{heading}</h6>
      <h1>{subHeadig}</h1>
    </div>
    <div className="row">
      {children}
    </div>
  </div>
</div>
  )
}

export default Section