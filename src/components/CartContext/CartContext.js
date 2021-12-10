import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (itemId, itemDesc, itemCount) => {
    console.log("items", items);
    let currentItems = items;
    if (!isInCart(itemId)) {
      setItems([{ itemId, itemDesc, itemCount }, ...items]);
    } else {
      currentItems = items
        .filter((e) => e.itemId === itemId)
        .map((i) =>  {i.itemCount += itemCount; return i;});
      setItems(currentItems);
    }
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
