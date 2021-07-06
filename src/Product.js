import React from "react";

function Product(props) {
  return (
    <div className="shop-card">
      <div className="shop-img">
        <img src={props.image} alt="image" />
      </div>
      <div className="product-text">
        <h6>{props.price}</h6>
        <span>{props.name}</span>
        <button>Купить</button>
      </div>
    </div>
  );
}

export default Product;
