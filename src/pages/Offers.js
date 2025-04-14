// src/pages/OffersPage.js
import React from 'react';

const OffersPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Special Offers 🎉</h2>
      <div className="row">
        {/* Offer 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://hips.hearstapps.com/hmg-prod/images/dsc03299-sc-1623764031.jpeg?crop=0.8893333333333333xw:1xh;center,top&resize=1200:*" className="card-img-top" alt="Offer 1" />
            <div className="card-body">
              <h5 className="card-title">Buy 1 Get 1 Free</h5>
              <p className="card-text">On all sundaes this weekend only!</p>
              <button className="btn btn-success">Grab Now</button>
            </div>
          </div>
        </div>

        {/* Offer 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://media.istockphoto.com/id/1154987560/vector/student-id-card-university-school-college-identity-card-vector-illustration.jpg?s=612x612&w=0&k=20&c=iMZ8N4jQPDeNpRE5hlcau4oNJzaJeuKpo5wSrPjZKa4=" className="card-img-top" alt="Offer 2" />
            <div className="card-body">
              <h5 className="card-title">20% Off</h5>
              <p className="card-text">For students with ID card at Ideal Café</p>
              <button className="btn btn-success">Claim Offer</button>
            </div>
          </div>
        </div>

        {/* Add more cards similarly */}
      </div>
    </div>
  );
};

export default OffersPage;
