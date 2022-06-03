import React, { useState, useRef } from "react";
import { send, sendForm } from "emailjs-com";
import emailjs from "@emailjs/browser";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyBAw7IcdM3DXY0YTR-qLa9ZigCmFSCWaeM",
  authDomain: "react-projekt-1.firebaseapp.com",
  projectId: "react-projekt-1",
  storageBucket: "react-projekt-1.appspot.com",
  messagingSenderId: "403975538884",
  appId: "1:403975538884:web:42de82ac30e1f834e4a191",
  measurementId: "G-5L51QH5CE3",
});
const auth = firebase.auth();

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;

  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  const form = useRef();
  var templateParams = {
    name: auth.currentUser.displayName,
    sendto: auth.currentUser.email,
    message: `You have just bought ${cartItems.map(
      (item) => item.qty + "." + " " + item.name
    )} for: ${totalPrice}€ `,
  };

  console.log(templateParams);

  const Sendmail = (e) => {
    console.log("test");
    console.log(sendForm);
    e.preventDefault();
    emailjs
      .send(
        "Felix's Bowl purchase",
        "template_ufoux78",
        templateParams,
        "Hc0262mZ0km6AAQOX"
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
