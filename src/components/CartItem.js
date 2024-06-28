import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";
import "./CartItem.css";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item is removed");
  };

  return (
    <div className="cart-item">
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <div className="cart-item-content">
        <h1 className="cart-item-title">{item.title}</h1>
        <p className="cart-item-description">{item.description}</p>
        <div className="cart-item-footer">
          <p className="cart-item-price">${item.price}</p>
          <div className="cart-item-remove" onClick={removeFromCart}>
            <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
