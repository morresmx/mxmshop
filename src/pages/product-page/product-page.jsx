import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";

import "./product-page.css";

export const ProductPage = () => {
  const { id } = useParams();
  const { cartItems, addToCart } = useContext(ShopContext);

  const product = PRODUCTS.find((product) => product.id === Number(id));
  const cartItemCount = cartItems[id];

  if (!product) {
    // Handle the case when the product is not found
    return <div>Product not found</div>;
  }

  return (
    <div className="product-pp">
      <img src={product.productImage} alt={product.productName} />
      <div className="description-pp">
        <p>
          <b>{product.productName}</b>
        </p>
        <p>
          <b>{product.productName}</b>
        </p>
        <p>${product.price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      </div>
      
    </div>
  );
};
