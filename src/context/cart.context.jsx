import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const addCartItem = (cartItems, productToAdd) => {
  let existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === productToAdd.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      } else return cartItem;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove, isDelete) => {
  if (!isDelete) {
    //Increment Decrement Logic
    let updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === productToRemove.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      } else return cartItem;
    });

    return updatedCartItems.filter((cartItem) => cartItem.quantity !== 0);
  } else {
    //Delete Logic
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
};

export const CartProvider = ({ children }) => {
  let [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setIsCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartCount(
      cartItems.reduce((total, item) => (total += item.quantity), 0)
    );
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(
      cartItems.reduce(
        (total, item) => (total += item.quantity * item.price),
        0
      )
    );
  }, [cartItems]);

  const addItemToCart = (productToAdd) =>
    setIsCartItems(addCartItem(cartItems, productToAdd));

  const removeItemFromCart = (productToRemove, isDelete = false) =>
    setIsCartItems(removeCartItem(cartItems, productToRemove, isDelete));

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
