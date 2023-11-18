import React from "react";

const ProductCart = ({ id, title, price, thumbnail }) => {
  return (
    <div className="product_container">
      <div className="image_container">
        <img src={thumbnail} alt="" />
      </div>
      <div className="info_container">
        <h4>{title}</h4>
        <p>${price} USD</p>
      </div>
    </div>
  );
};

export default ProductCart;
