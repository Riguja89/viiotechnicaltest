import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import backArrow from "../images/login/back-arrow.svg";
import verifyFields from "../scripts/signUp";
import { postUser } from "../redux/actions/index";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logueado = useSelector((state) => state.logueado);

  useEffect(() => {
    if (logueado) navigate("/");
  }, [logueado, navigate]);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastname: "",
    password: "",
    confPassword: "",
  });

  const [warnings, setWarnings] = useState({
    name: "*El nombre es obligatorio",
    lastname: "*Apellidos son obligatorios",
    email: "*Email obligatorio",
    password:
      "La contraseña debe tener números y letras y mínimo de 6 caracteres",
    confPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setWarnings(
      verifyFields(e.target.name, e.target.value, warnings, formData)
    );
    console.log(warnings);
  };

  const send = (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      warnings.name ||
      warnings.email ||
      warnings.password ||
      warnings.lastname ||
      warnings.confPassword
    ) {
      alert("Asegurese de tener todos los campos correctamente");
    } else {
      dispatch(postUser(formData));
    }
  };

  const goback = () => {
    navigate(-1);
  };

  return (
    <div className="signup_container">
      <div className="signup_header">
        <div className="back_container" onClick={goback}>
          <img src={backArrow} alt="" />
        </div>
        <h3 className="title">Sign Up</h3>
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
            <span className="danger">{warnings.email}</span>
          </div>
          <div className="label_section">
            <label htmlFor="name">
              Nombre
              <br />
              <input
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={handleChange}
              />
            </label>
            <span className="danger">{warnings.name}</span>
          </div>
          <div className="label_section">
            <label htmlFor="lastname">
              Apellidos
              <br />
              <input
                type="text"
                placeholder="Apellidos"
                name="lastname"
                onChange={handleChange}
              />
            </label>
            <span className="danger">{warnings.lastname}</span>
          </div>
          <div className="label_section">
            <label htmlFor="password">
              Contraseña
              <br />
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
              />
            </label>
            <span className="danger">{warnings.password}</span>
          </div>
          <div className="label_section">
            <label htmlFor="confPassword">
              Confirmar Contraseña
              <br />
              <input
                type="password"
                placeholder="password"
                name="confPassword"
                onChange={handleChange}
              />
            </label>
            <span className="danger">{warnings.confPassword}</span>
          </div>
          <br />
          <input className="submit" type="submit" value="Sign Up" />
        </form>
        <div className="shitcher_signup">
          <label>Already have an account? </label>
          <Link to={"/login"} className="signup">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
