import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import back from "../src/assets/back.png";
import "./App.css"; // Correct path to your image
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const Register = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues, //initial value get garcham
    validationSchema: signUpSchema, // validation huncha
    onSubmit: (values) => {
      console.log("🚀 ~ file: Register.js:20 ~ Register ~ values:", values);
    }, //onSubmit maa hami lai data milcha
  });
  console.log("🚀 ~ file: Register.js:23 ~ Register ~ errors:", errors);

  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 shadow p-3 mb-5 bg-white rounded mt-4">
            <h2 className="text-center mb-4">Registration Page</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="name"
                  className="form-control"
                  autoComplete="off"
                  name="name"
                  id="username"
                  placeholder="Enter your username"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {<p className="form-error">{errors.name}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {<p className="form-error">{errors.email}</p>}
              </div>
              {/* ===================password============================ */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  autoComplete="off"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {<p className="form-error">{errors.password}</p>}
              </div>
              {/* =======================Confirm password===================== */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  autoComplete="off"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {<p className="form-error">{errors.confirmPassword}</p>}
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
