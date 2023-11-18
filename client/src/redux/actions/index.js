import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const POST_USER = "POST_USER";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN = "LOG_IN";
export const VERIFY_SESION = "VERIFY_SESION";
export const SEARCH = "SEARCH";

export const getAllProducts = (token) => (dispatch) => {
  return axios
    .get("http://localhost:3001/api/product/all", {
      headers: { token: JSON.parse(token) },
    })
    .then((response) => response.data)
    .then((products) => dispatch({ type: GET_ALL_PRODUCTS, payload: products }))
    .catch((error) => console.log(error));
};

export const postUser = (formData) => (dispatch) => {
  return axios
    .post("http://localhost:3001/api/user/signup", formData)
    .then((response) => response.data)
    .then((user) => {
      alert("Usuario agregado correctamente");
      dispatch({ type: POST_USER, payload: user });
    })
    .catch((error) => {
      error?.response?.data?.message
        ? alert(error.response.data.message)
        : alert("error en el servidor");
    });
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOG_OUT, payload: "" });
};

export const logIn = (formData) => (dispatch) => {
  return axios
    .post("http://localhost:3001/api/user/login", formData)
    .then((response) => response.data)
    .then((user) => {
      dispatch({ type: LOG_IN, payload: user });
    })
    .catch((error) => {
      error?.response?.data?.message
        ? alert(error.response.data.message)
        : alert("error en el servidor");
    });
};

export const verifySesion = (token, user) => async (dispatch) => {
  return await axios
    .get("http://localhost:3001/api/user/verify", {
      headers: { token: JSON.parse(token) },
    })
    .then((response) => response.data)
    .then((data) => {
      if (data.message === "user ok") {
        dispatch({ type: VERIFY_SESION, payload: user });
      } else {
        dispatch({ type: LOG_OUT, payload: "" });
        console.log(data);
      }
    })
    .catch((error) => {
      dispatch({ type: LOG_OUT, payload: "" });
      error?.response?.data?.message
        ? console.log(error.response.data.message)
        : alert("error en el servidor");
    });
};

export const searchProd = (toSearch) => (dispatch) => {
    dispatch({ type: SEARCH, payload: toSearch });
  };
