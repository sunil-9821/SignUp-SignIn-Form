import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Modal from "./Modal";
import { toast } from "react-toastify";
function SignUp({ mode }) {
  const initialData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialData);
  // const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  // const [data, setData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(validateErrors({ ...formData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateErrors(formData);
    setErrorMessage(errors);
    // setShowModal(true);
    if (Object.keys(errors).length === 0) {
      toast.success("Form submitted successfully!");
      localStorage.setItem("userData", JSON.stringify([formData]));
      setFormData(initialData);
    } else {
      toast.error("Please fix the errors before submitting.");
      return;
    }
  };

  // useEffect(() => {
  //   if (!showModal) {
  //     setFormData(initialData);
  //   }
  // }, [showModal]);

  const validateErrors = (data) => {
    const errors = {};
    const userNameRegex = /^[a-zA-Z0-9_-]{3,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!data.username) {
      // toast.error("Username is required");
      errors.username = "*Username is required";
    } else if (!userNameRegex.test(data.username)) {
      // toast.error("Username should only contain alphanumeric characters");
      errors.username = "*Username should only contain alphanumeric characters";
    }

    if (!data.email) {
      // toast.error("Email is required");
      errors.email = "*Email is required";
    } else if (!emailRegex.test(data.email)) {
      // toast.error("Invalid email format");
      errors.email = "*Invalid email format";
    }

    if (!data.password) {
      // toast.error("Password is require");
      errors.password = "*Password is required";
    } else if (!passwordRegex.test(data.password)) {
      // toast.error( "Minimum eight characters, at least one uppercase, one lowercase, one number, and one special character");
      errors.password =
        "*Minimum eight characters, at least one uppercase, one lowercase, one number, and one special character";
    }

    if (!data.confirmPassword) {
      // toast.error("Confirm Password is required");
      errors.confirmPassword = "*Confirm Password is required";
    } else if (data.confirmPassword !== data.password) {
      // toast.error("Passwords do not match");
      errors.confirmPassword = "*Passwords do not match";
    }
    return errors;
  };

  return (
    <div
      className={`container w-50 mt-4 py-4 px-5 rounded text-${
        mode === "light" && "light"
      }
      }`}
      style={{
        background: `${mode === "light" ? "#01101a" : "#131f29"}`,
      }}
    >
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="user-name" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="user-name"
            placeholder="Username"
            value={formData.username}
            name="username"
            onChange={handleChange}
          />
          <p className="text-danger">{errorMessage.username}</p>
        </div>
        <div className="my-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          <p className="text-danger">{errorMessage.email}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
          <p className="text-danger">{errorMessage.password}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Current Password"
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
          <p className="text-danger">{errorMessage.confirmPassword}</p>
        </div>
        <p className="d-block text-end text-secondary ">
          Already have an account?
          <Link className="text-secondary" to="/login">
            Sign In
          </Link>
        </p>
        <button type="submit" className="btn btn-primary w-25">
          Sign Up
        </button>
      </form>
      {/* <Modal
        show={showModal}
        errorMessage={errorMessage}
        onClose={() => setShowModal(false)}
      /> */}
    </div>
  );
}

export default SignUp;
