import React from "react";

function Hospitalloc() {
  return (
    <div className="hosploc container my-5">
      <h1 className="text-center pb-2">Search Your Nearest Hospital</h1>
      <div className="row">
        <div className="col">
          <label htmlFor="inputPassword5" className="form-label">
            Pincode
          </label>
          <input
            type="tel"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            placeholder="Enter 6 digit pincode"
          />
        </div>
        <div className="col">
          <label htmlFor="inputNearestHospital" className="form-label">Nearest Hospital</label>
          <select className="form-select" aria-label="Default select example" id="inputNearestHospital">
            <option defaultValue={"Open this select menu"}>Select your nearest Hospital</option>
            <option value="1">Location 1</option>
            <option value="2">Location 2</option>
            <option value="3">Location 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Hospitalloc;
