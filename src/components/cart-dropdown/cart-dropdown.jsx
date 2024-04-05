import React, { useContext } from "react";
import "./cart-dropdown.scss";
import Button from "../button/button";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item, i) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={() => navigate("/checkout")}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
