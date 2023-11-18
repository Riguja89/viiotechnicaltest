import "./App.scss";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch} from "react-redux";
import { verifySesion } from "./redux/actions";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Products from "./components/Products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
     dispatch(verifySesion(token,user));
    }
  },[dispatch]);

  return (
    <React.Fragment>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Landing>
                <Nav />
              </Landing>
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
