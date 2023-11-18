import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "./ProductCart";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router";
import { getAllProducts } from "../redux/actions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsToShow);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(getAllProducts(token));
    } else {
      navigate("/");
    }
  }, [dispatch, navigate, token]);

  return (
    <div className="container">
      <SearchBar />
      {products[0] === "pending" ? (
        <>
          <div className="spinner"> Loading...</div>
        </>
      ) : (
        <>
          {" "}
          {products.length > 0 ? (
            <>
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
            </>
          ) : (
            <>
              <div className="mensage_container">
                <h4>No se encontraron productos con ese item de busqueda</h4>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
