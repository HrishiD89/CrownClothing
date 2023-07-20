import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productTOAdd) => {
  //  find if cartItem contains productToAdd
  const isProductExistInCart = cartItems.find(
    (cardItem) => cardItem.id === productTOAdd.id
  );
  // If found,increment quantity
  if (isProductExistInCart) {
    const updatedCartItem = cartItems.map((cardItem) =>
      cardItem.id === productTOAdd.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
    return updatedCartItem;
  }
  // return new array with modified cartItems/new cart items
  else {
    const newCartItem = { ...productTOAdd, quantity: 1 };
    return [...cartItems, newCartItem];
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productTOAdd) => {
    setCartItems(addCartItem(cartItems, productTOAdd));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
