import React from 'react'

const ContactUsForm = () => {
  return (
    <div className="container">
    <div className="row justify-content-lg-center">
      <div className="col-12 col-lg-9" style={{border:'1px solid rgba(0,0,0,0.2)'}}>
        <div className="bg-white border rounded overflow-hidden">
          <form action="#!">
            <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
              <div className="col-12">
                <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="fullname" name="fullname" defaultValue required />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                <div className="input-group">
                  <input type="email" className="form-control" id="email" name="email" defaultValue required />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <div className="input-group">
                  <input type="tel" className="form-control" id="phone" name="phone" defaultValue />
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                <textarea className="form-control" id="message" name="message" rows={3} required defaultValue={""} />
              </div>
              <div className="col-12">
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUsForm