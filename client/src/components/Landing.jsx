import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Landing = ({ children }) => {
  const logueado = useSelector((state) => state.logueado);
  return (
    <div className="landing_container">
      {children}
      <div className="welcome">
        {logueado?<>
        <Link to={"/products"}>
        <div className="button_container">
            <button>Ver productos</button>
        </div>
        </Link>
        </>:<>
            <h3>Inicia sesion o crea una cuenta para poder ver los productos</h3>
        </>}
      </div>
    </div>
  );
};

export default Landing;
