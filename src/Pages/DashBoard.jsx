import React from "react";
import { Link } from "react-router-dom";

function DashBoard() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to your Dashboard!</h1>
      <p>Here you can access all your personal and sensitive data.</p>
      <Link to="/login" className="btn btn-primary">
        Logout
      </Link>
    </div>
  );
}

export default DashBoard;
