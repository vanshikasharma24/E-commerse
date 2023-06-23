import React, { useState } from "react";
import list from "../data";
import "../styles/ProductList.css";
import SingleProduct from "./SingleProduct";

const ProductList = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <SingleProduct key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default ProductList;
