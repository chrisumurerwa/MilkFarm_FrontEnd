import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import logo from "../assets/logo.png"; // Ensure the path matches your project

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onLoginSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5001/user/Signin", data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const onRegisterSubmit = async (data) => {
    try {
      data.confirmPassword = data.password;
      const res = await axios.post("http://localhost:5001/user/signup", data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.data);
      alert("Registration successful! Please login.");
      location.reload()
    } catch (error) {
      alert(error?.response?.data || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src={logo} alt="contact" className="image" />
        <h2 className="auth-heading">
          {isLogin ? "Login to Your Account" : "Create an Account"}
        </h2>
        <form
          onSubmit={handleSubmit(isLogin ? onLoginSubmit : onRegisterSubmit)}
          className="auth-form"
        >
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true })}
              className="auth-input"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
            className="auth-input"
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="auth-input"
          />
          <button type="submit" className="auth-submit-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)} className="auth-toggle">
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Login;