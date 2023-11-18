import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/actions";

const Nav = () => {
  const logueado = useSelector((state) => state.logueado);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logOutClick=()=>{
    dispatch(logOut());
  }

  return (
    <div className="nav_container">
        {!logueado?<>
            <Link to={"/login"}>
        <div className="button_container">
          <button className="button_global">Log in</button>
        </div>
      </Link>
      <Link to={"/signup"}>
        <div className="button_container">
          <button className="button_global">Sign up</button>
        </div>
      </Link>
        </>:
        <>
        <p>hola {user.name}</p>
        <div className="button_container" onClick={logOutClick}>
          <button className="button_global">Log out</button>
        </div>
      
        </>
        }
      
    </div>
  );
};
export default Nav;
