import React from "react";

export default function RegisterPage() {
  return (
    <div className=" register shadow mt-5 container">
      <form>
        <h2 className="m-5 text-center">Register with HealthCare</h2>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label for="exampleInputFname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFname"
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputdob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleInputdob"
                required
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                required
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label for="exampleInputLname" className="form-label">
                Last Name
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputLname"
                required
                placeholder="Enter last name"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputMnum" className="form-label">
                Mobile number
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputMnum"
                required
                placeholder="Enter 10 digit mobile number"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                required
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter password"
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label for="formFile" className="form-label">
            Upload an Identity Proof
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <button type="submit" className="btn btn-primary" id="reg-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
