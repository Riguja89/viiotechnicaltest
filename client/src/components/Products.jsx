import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "./ProductCart";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router";
import { getAllProducts } from "../redux/actions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const logueado = useSelector((state) => state.logueado);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (logueado && token) {
      dispatch(getAllProducts(token));
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="container">
      <SearchBar />
      <div className="products_container">
      {products.map((product, i) => (
        <ProductCart
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          thumbnail={product.thumbnail}
        ></ProductCart>
      ))}
      </div>
   
    </div>
  );
};

export default Products;
