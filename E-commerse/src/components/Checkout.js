import React, { useState } from "react";
import "../styles/Checkout.css";
import { displayRazorpay } from "../razorpay";

const Checkout = ({ totalPrice }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    address: "",
    payment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Perform form validation
    let formIsValid = true;
    const newErrors = { name: "", address: "", payment: "" };
  
    if (!name.trim()) {
      formIsValid = false;
      newErrors.name = "Name is required";
    }
  
    if (!address.trim()) {
      formIsValid = false;
      newErrors.address = "Address is required";
    }
  
    if (!payment.trim()) {
      formIsValid = false;
      newErrors.payment = "Payment details are required";
    } else if (isNaN(payment)) {
      formIsValid = false;
      newErrors.payment = "Payment should be a number";
    }
  
    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }
  
    displayRazorpay(parseFloat(payment));

    // Clear the form fields
    setName("");
    setAddress("");
    setPayment("");
    setErrors({ name: "", address: "", payment: "" });
  };
  
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Shipping Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="payment">Payment Details:</label>
          <input
            type="text"
            id="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          />
          {errors.payment && <span className="error">{errors.payment}</span>}
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Checkout;
