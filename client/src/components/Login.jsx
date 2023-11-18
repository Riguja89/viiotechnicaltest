import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backArrow from "../images/login/back-arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/actions";

const Login = () => {
  const navigate = useNavigate();
  const dispach = useDispatch();
  const logueado=useSelector((state) => state.logueado);

  useEffect(() => {
    if (logueado) navigate("/");
  }, [logueado, navigate]);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const send = (e) => {
    e.preventDefault();
    dispach(logIn(formData));
  };

  const goback = () => {
    navigate(-1);
  };

  return (
    <div className="login_container">
      <div className="login_heade">
        <div className="back_container" onClick={goback}>
          <img src={backArrow} alt="" />
        </div>
        <h3 className="title">Log In</h3>
        <div className="back_container"></div>
      </div>
      <div className="mainnoot_container">
        <Link to={"/"}>
          <h2>MAINOOTH</h2>
        </Link>
      </div>
      <div className=" form_container">
        <form onSubmit={send}>
          <div className="label_section">
            <label htmlFor="email">
              E-Mail
              <br />
              <input
                type="email"
                placeholder="E-Mail"
                name="email"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="label_section">
            <label htmlFor="password">
              Password
              <br />
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <input className="submit" type="submit" value="Log in" />
        </form>
        <div className="shitcher_signup">
          <label>Don't have an account? </label>
          <Link to={"/signup"} className="signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
