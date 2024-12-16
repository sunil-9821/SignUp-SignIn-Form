import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function DashBoard({ mode }) {
  const navigate = useNavigate();
  const handleClick = () => {
    // localStorage.removeItem("token");
    // window.location.href = "/";
    toast.success("You are log out now");
    navigate("/");
  };
  return (
    <div
      className={`container text-center text-${
        mode === "light" ? "black" : "warning"
      } mt-5`}
    >
      <h1>Welcome to your Dashboard!</h1>
      <p>Here you can access all your personal and sensitive data.</p>
      <button onClick={handleClick} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
}

export default DashBoard;
