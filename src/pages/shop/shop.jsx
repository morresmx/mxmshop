import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import banner from "../../assets/other/banner.jpg"

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <img className="banner" src={banner} alt={""} />
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
