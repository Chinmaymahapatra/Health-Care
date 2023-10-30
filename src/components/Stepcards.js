import React from "react";
import cardimage1 from "./userlogin.png";
import cardimage2 from "./uploadfiles.png";
import cardimage3 from "./completereg.png";
import "./style.css";

function Main() {
  return (
    <div className="main1">
      <div className="container">
        <h1 className="text-center">
          Get yourself registered on Healthcare in 3 easy steps
        </h1>
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col step">
            <div className="card">
              <img src={cardimage1} className="card-img-top" alt="error1" />
              <div className="card-body">
                <h5 className="card-title">STEP 1</h5>
                <p className="card-text">
                  Headover to the official website of HealthCare and go ahead with the register page.
                </p>
              </div>
            </div>
          </div>
          <div className="col step">
            <div className="card">
              <img src={cardimage2} className="card-img-top" alt="error2" />
              <div className="card-body">
                <h5 className="card-title">STEP 2</h5>
                <p className="card-text">
                  Fill in the required details and upload the neccessary documents for verification. Wait for the documents to get
                  uploaded.
                </p>
              </div>
            </div>
          </div>
          <div className="col step">
            <div className="card">
              <img src={cardimage3} className="card-img-top" alt="error3" />
              <div className="card-body">
                <h5 className="card-title">STEP 3</h5>
                <p className="card-text">
                  Within few minutes of documents getting uploaded, enter the OTP recieved in your email
                  and that's it. Welcome to HealthCare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
