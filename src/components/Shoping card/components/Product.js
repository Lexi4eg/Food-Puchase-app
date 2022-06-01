import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <>
      <div className="bowlselement">
        <div className="Bowlname">{product.name}</div>
        <h4>Preis: {product.preis}</h4>
        <button className="orderbutton" onClick={() => onAdd(product)}>
          Order
        </button>
      </div>
    </>
  );
}
