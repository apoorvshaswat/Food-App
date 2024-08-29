import React from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  return (
    <div className="cart_outer">
      <div className="cart">
        <h2>
          {" "}
          <b> Your Shopping Cart ( {props.totalQuantity} Items )</b>
        </h2>

        <div className="totalamount">
          <h3>Total Amount: ₹{props.totalAmount}</h3>
        </div>

        <div className="button_buy">
          <button type="button" class="btn btn-primary">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/thanks"
              bg-white
            >
              Buy
            </Link>
          </button>
        </div>

        <div className="button_reset">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => props.reset()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
