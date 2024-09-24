import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    <div className="product_container">
      <h2 className="product_heading">
        <b>Order Your Favorite Dishes</b>
      </h2>
      <div className="product_main">
        {props.productList.map((product, index) => (
          <Product
            product={product}
            key={index}
            index={index}
            incrementQuantity={props.incrementQuantity}
            decrementQuantity={props.decrementQuantity}
          />
        ))}
      </div>
    </div>
  );
}
