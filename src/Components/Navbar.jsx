import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary shadow"
      data-bs-theme={props.mode}
    >
      <div className="container-fluid mx-5">
        <h2 className="navbar-brand">Login App</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">
                SignIn
              </Link>
            </li>
          </ul>
        </div> */}
        <div className=" form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.mode === "light" ? "Enable Dark mode" : "Enable light mode"}
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
