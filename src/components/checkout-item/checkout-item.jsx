import React from "react";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem }) => {
  let { name, imageUrl, price, quantity } = cartItem;
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  const clearItemHandler = () => removeItemFromCart(cartItem, true);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>

        {quantity}

        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
