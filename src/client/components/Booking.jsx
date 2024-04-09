import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

const Booking = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="container-fluid booking mt-5 pb-5">
      <div className="container pb-5">
        <div className="bg-light shadow" style={{ padding: 30 }}>
          <div className="row align-items-center" style={{ minHeight: 60 }}>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3">
                  <div className="mb-3 mb-md-0">
                    <select
                      className="custom-select px-4"
                      style={{ height: 47 }}
                    >
                      <option selected>Destination</option>
                      <option value={1}>Destination 1</option>
                      <option value={2}>Destination 1</option>
                      <option value={3}>Destination 1</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3 mb-md-0">
                    <Form.Control
                      type="date"
                      name="datepic"
                      placeholder="Depart Date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3 mb-md-0">
                    <Form.Control
                      type="date"
                      name="datepic"
                      placeholder="Return Date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3 mb-md-0">
                    <select
                      className="custom-select px-4"
                      style={{ height: 47 }}
                    >
                      <option selected>Duration</option>
                      <option value={1}>Duration 1</option>
                      <option value={2}>Duration 1</option>
                      <option value={3}>Duration 1</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-primary btn-block"
                type="submit"
                style={{ height: 47, marginTop: "-2px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking