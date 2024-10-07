import React, { useEffect, useState } from "react";

export default function CheckOut(props) {
  const [total, setTotal] = useState(0);

  const finalItems = props.productList.filter((p) => p.quantity > 0);

  useEffect(() => {
    const calctotal = () => {
      let totalAmount = 0;
      finalItems.forEach((i) => (totalAmount += i.price * i.quantity));
      setTotal(totalAmount);
    };
    calctotal();
  }, [finalItems]);

  return (
    <div className="checkout_outer">
      <div className="checkout">
        <div className="checkout_heading">Your Cart</div>
        {finalItems.map((item, index) => (
          <div className="checkoutlist">
            {item.name} ( {item.quantity} ) : ₹ {item.price}
          </div>
        ))}
        <div className="total">Grand Total : ₹ {total}</div>

        <button className="btn btn-danger">Pay</button>
      </div>
    </div>
  );
}
