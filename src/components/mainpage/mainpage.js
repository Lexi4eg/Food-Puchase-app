import React from "react";
import { useRef } from "react/cjs/react.production.min";
import emailjs from "@emailjs/browser";
import Shoppingcard from "../Shoping card/Shoppingcard";

const bowls = [
  { id: 1, bowlname: "Ganbian Huhn 🌶️", preis: "6,00€" },
  { id: 2, bowlname: "Pao Chicken 🌶️🌶️", preis: "5,40€" },
  { id: 3, bowlname: "Thai Kokos-Curry 🌶️🌶️", preis: "6,30€" },
  { id: 4, bowlname: "Butter-Chicken Masala 🌶️", preis: "6,70€" },
  { id: 5, bowlname: "Bulgogi / Kimchi 🌶️", preis: "7,40€" },
  { id: 6, bowlname: "Gebr. Curry-Gemüsereis mit Huhn", preis: "5,20€" },
  { id: 7, bowlname: "Caramel Chicken", preis: "6,20€" },
  { id: 8, bowlname: "Korea Knoblauch Chicken", preis: "6,50€" },
  { id: 9, bowlname: "Korea Chicken 🌶️🌶️🌶️", preis: "6,50€" },
  { id: 9, bowlname: "Lemon -Ginger Chicken mit Ananas", preis: "6,50€" },
];

function Mainpage() {
  return (
    <div className="mainpage">
      <Shoppingcard />
    </div>
  );
}

export default Mainpage;
