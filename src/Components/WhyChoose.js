import React from 'react';
import image4 from "../Asstes/image4.jpg"
export default function WhyChoose() {
  return (
    <div>
      <div className="container d-flex p-2">
        <div className="row">
        <div className="col-sm-3 container d-flex p-2"> 
            <img src={image4} className="img-fluid" alt="img" />
          </div>

          <div className="col-sm-8 container p-2 mt-2 justify-content-center">
            <h1>Why Choose Us</h1>
            <div className="m-2">
              <dl className="row">
                <dt className="col-sm-3">Guaranteed Maximum Refund</dt>
                <dd className="col-sm-9">Our services are tailored to individual needs. Take advantage of every credit and deduction available to you. </dd>
                <dt className="col-sm-3 ">Experienced Tax Pros</dt>
                <dd className="col-sm-9">Our reputable tax professionals are registered to practice before the IRS and Quick Books certified. You can count on us to be there for you when you need us. </dd>
                <dt className="col-sm-3">Year around service</dt>
                <dd className="col-sm-9">Our services are available throughout the year, unlike other seasonal Tax prep companies. </dd>
              </dl>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
