import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (itemId, itemDesc, itemPrice, itemCount) => {
    console.log("item:", itemId, itemDesc, itemPrice, itemCount);
    let currentItems = items;
    if (!isInCart(itemId)) {
      setItems([...items, { itemId, itemDesc, itemPrice, itemCount }]);
    } else {
      currentItems = items
        .filter((e) => e.itemId === itemId)
        .map((i) => {
          i.itemCount += itemCount;
          return i;
        });
      setItems(currentItems);
    }

    console.log("items", items);
  };

  const removeItem = (itemId) => {
    console.log("remove: ", itemId);
    let currentItems = items;
    if (isInCart(itemId)) {
      currentItems = items.filter((e) => e.itemId !== itemId);
      console.log("filter: ", currentItems);
      setItems(currentItems);

      console.log("items updated : ", items);
    }
  };

  const isInCart = (id) => {
    return items.some((e) => e.itemId === id);
  };

  return (
    <CartContext.Provider value={[items, addItem, removeItem]}>
      {children}
    </CartContext.Provider>
  );
};
