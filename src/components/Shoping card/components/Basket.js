import React from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

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
              <button
                className="checkoutbutton"
                onClick={() => alert("Implement Checkout!")}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
