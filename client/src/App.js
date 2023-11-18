import "./App.scss";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifySesion, logOut } from "./redux/actions";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Products from "./components/Products";

function App() {
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const state = useSelector((state) => state.estado);

  useEffect(() => {
    if (user && token) {
      dispatch(verifySesion(token, user));
    }else{
      dispatch(logOut())
    }
  }, [dispatch, token, user, state]);

  return (
    <React.Fragment>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              {state!=="pending" ? (
                <>
                  <Landing>
                    <Nav />
                  </Landing>
                </>
              ) : (
                <>
                  <div>Cargando...</div>
                </>
              )}
            </>
          }
        />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
