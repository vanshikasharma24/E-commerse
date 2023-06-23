import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shopping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
          </span>
          <span className={`cart-count ${size > 0 ? "show" : "hide"}`}>
            {size}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
