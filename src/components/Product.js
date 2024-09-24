import React from "react";

export default function Product(props) {
  return (
    <div className="product">
      <div className="product-image">
        <img src={props.product.imgSrc} alt={props.product.name} />
      </div>
      <h1 className="product-heading">{props.product.name}</h1>
      <p className="product-description">
        Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula.
        Duis venenatis at eros sed egestas.
      </p>
      <p className="product-price">₹{props.product.price}</p>
      <div className="product-quantity">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => props.incrementQuantity(props.index)}
        >
          +
        </button>
        <span className="quantity">{props.product.quantity}</span>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.decrementQuantity(props.index)}
        >
          -
        </button>
      </div>
    </div>
  );
}
