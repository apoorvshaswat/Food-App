import React from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  return (
    <div className="cart_outer">
      <div className="cart">
        <h2>
          <b>Your Shopping Cart ({props.totalQuantity} Items)</b>
        </h2>

        <div className="totalamount">
          <h3>Total Amount: ₹{props.totalAmount}</h3>
        </div>

        <div className="button_buy">
          <Link className="btn btn-primary" aria-current="page" to="/checkout">
            View Your Cart
          </Link>
        </div>

        <div className="button_reset">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.reset()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
