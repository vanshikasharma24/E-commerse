import React, { useState, useEffect } from "react";
import "../styles/ShoppingCart.css";
import Checkout from "./Checkout";

const ShoppingCart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
      <button className="checkoutBtn" onClick={handleCheckout}>
        Checkout
      </button>
      {showCheckout && <Checkout cart={cart} price={price} />}
    </article>
  );
};

export default ShoppingCart;
