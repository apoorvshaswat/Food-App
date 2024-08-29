import React from "react";

export default function Product(props) {
  return (
    <div className="product_main">
      <div className="col-4">
        <div className="price">
          <div className="price__img">
            <img src={props.product.imgSrc} alt={props.product.name} />
          </div>
          <h1 className="price__heading">{props.product.name}</h1>
          <p className="price__text">
            Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula.
            Duis venenatis at eros sed egestas.
          </p>
          <p className="price_rs">₹{props.product.price}</p>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => props.incrementQuantity(props.index)}
          >
            +
          </button>
          <button type="button" className="btn btn-light">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.decrementQuantity(props.index)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
