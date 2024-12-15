import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login({ mode }) {
  const navigate = useNavigate();
  const defaultValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(defaultValues);
  const [errorMessage, setErrorMessage] = useState({});
  const [showModal, setShowModal] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const obj = Object.fromEntries(formData.entries());
  //   console.log(obj);
  // };
  const userData = JSON.parse(localStorage.getItem("userData")) || [{}];
  const userEmail = userData[0]?.email || "admin@gmail.com";
  const userPassword = userData[0]?.password || "Admin@000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrorMessage(validateErrors({ ...formValues, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateErrors(formValues);
    setErrorMessage(errors);

    if (Object.keys(errors).length > 0) {
      setShowModal(true);
      return;
    }

    if (
      formValues.email === userEmail &&
      formValues.password === userPassword
    ) {
      toast.success("Login successful");
      navigate("/dashboard");
    } else {
      setShowModal(true);
    }
  };
  useEffect(() => {
    if (!showModal) {
      setFormValues(defaultValues);
    }
  }, [showModal]);
  const validateErrors = (value) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!value.email) {
      errors.email = "*Email is required!";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "*Invalid email format";
    }
    if (!value.password) {
      errors.password = "*Password is required!";
    } else if (!passwordRegex.test(value.password)) {
      errors.password =
        "*Minimum eight characters, at least one uppercase, one lowercase, one number, and one special character";
    }
    return errors;
  };
  return (
    <div
      className={`container w-50 my-5 p-5 rounded  text-${
        mode === "light" && "light"
      }`}
      style={{ background: `${mode === "light" ? "#01101a" : "#131f29"}` }}
    >
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="text-danger">{errorMessage.email}</p>
        </div>
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p className="text-danger">{errorMessage.password}</p>
        </div>
        <p className="text-end text-secondary">
          Create an account
          <Link className="text-secondary" to="/">
            {" "}
            SignUp
          </Link>
        </p>
        <button type="submit" className="btn btn-primary w-25">
          Sign In
        </button>
      </form>
      {formValues.email === userEmail &&
        formValues.password === userPassword && (
          <Modal
            show={showModal}
            errorMessage={errorMessage}
            onClose={() => setShowModal(false)}
          />
        )}
    </div>
  );
}

export default Login;
