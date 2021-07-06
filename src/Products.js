import React from "react";
import Product from "./Product";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import image5 from "./assets/5.jpg";
import image6 from "./assets/6.jpg";

function Products() {
  return (
    <div className="main">
      <div className="products-row">
        <Product image={image1} price="97000p" name="MacBook" />
        <Product image={image2} price="36000p" name="Galaxy" />
        <Product image={image3} price="58000p" name="Скутер" />
      </div>
      <div className="products-row">
        <Product image={image4} price="12000p" name="Монитор Samsung" />
        <Product image={image5} price="500p" name="Респираторная маска" />
        <Product image={image6} price="75000p" name="Стиральная машина" />
      </div>
    </div>
  );
}

export default Products;
