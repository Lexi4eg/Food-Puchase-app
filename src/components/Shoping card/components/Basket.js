import React, { useState, useRef } from "react";
import { send, sendForm } from "emailjs-com";
import emailjs from "@emailjs/browser";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  console.log(cartItems);

  const form = useRef();
  var templateParams = {
    name: "James",
    message: `Sie haben eine ${item.name} um: ${item.price} gekauft`,
  };
  const Sendmail = (e) => {
    console.log("test");
    console.log(sendForm);
    e.preventDefault();
    emailjs
      .send(
        "Felix's Bowl purchase",
        "template_ufoux78",
        "Hc0262mZ0km6AAQOX",

        {
          from_name: "felix",
          to_name: "user",
          user_email: "felix.prattes@gmail.com",
          message: "hi ich hoffe das funktioniert",
        }
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <aside className="maincontent">
      <div className="Cartitems">
        <h2>Cart Items</h2>
      </div>

      <div className="cartcontent">
        {cartItems.length === 0 && (
          <div className="Cartempty">Cart is empty</div>
        )}
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="checkoutdata">
              <div className="productname">
                <h4>{item.name}</h4>

                <div className="addandremove">
                  <button onClick={() => onRemove(item)} className="remove">
                    -
                  </button>{" "}
                  <button onClick={() => onAdd(item)} className="add">
                    +
                  </button>
                </div>
              </div>
              <div className="boweinzelnpreis">
                {item.qty} x €{item.price.toFixed(2)}
              </div>
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>

            <div className="checkoutdata">
              <div className="totalprice">
                <div>Total Price</div>
              </div>
              <div className="pircenubmer">
                <div totalpricenumber>€{totalPrice.toFixed(2)}</div>
              </div>
            </div>
            <hr />
            <div className="checkout">
              <form ref={form} onSubmit={Sendmail}>
                <button className="checkoutbutton" type="submit">
                  Checkout
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
