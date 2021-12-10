import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (itemId, itemDesc, itemCount) => {

    if (!isInCart(itemId)) {
      setItems([...items, { itemId, itemDesc, itemCount }]);
    } else {
      setItems(
        items
          .filter((e) => e.id === itemId)
          .map((i) => (i.itemCount += itemCount))
      );
    }

    console.log(items);
  };

  const isInCart = (id) => {
    return items.some((e) => e.itemId === id);
  };

  return (
    <CartContext.Provider value={[items, addItem]}>
      {children}
    </CartContext.Provider>
  );
};
