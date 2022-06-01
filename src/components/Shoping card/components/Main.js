import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="">
      <div className="row">
        <div className="bowlscomponent">
          {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      </div>
    </main>
  );
}
