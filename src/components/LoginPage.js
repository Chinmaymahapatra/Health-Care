import React from "react";

export default function LoginPage() {
  return (
    <>
      {/* <div className="login-image"></div> */}
      <div className="login container shadow mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <h2 className="mb-3 text-center mt-5">Login</h2>
              <div className="form-group" controlId="email">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group mt-3" controlId="password">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" id="lg-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
