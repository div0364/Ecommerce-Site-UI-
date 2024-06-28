import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "./Cart.css";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <div>
          <div className="cart-items">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="cart-summary">
            <div>
              <div className="cart-summary-title">Your Cart</div>
              <div className="cart-summary-title">Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div className="cart-summary-details">
              <p className="cart-summary-total">Total Amount: ${totalAmount}</p>
              <button className="checkout-button">Check Out Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h1>Cart Empty</h1>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
