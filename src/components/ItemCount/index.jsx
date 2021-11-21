import "./ItemCount.css";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const onAddItemHandler = () => {
    if (count <= stock) onAdd(stock,count);
  };

  return (
    <div className="item-buy-container">
      <div className="buy-action-container">
        <Button variant="outline-dark" onClick={onAddItemHandler}>
          <FaCartPlus /> Agregar al carrito
        </Button>
      </div>
      <div className="item-count-container">
        <InputGroup>
          <Button
            variant="outline-secondary"
            id="button-addon1"
            onClick={decCount}
          >
            <FaMinusCircle />
          </Button>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={count}
          />
          <Button
            variant="outline-secondary"
            id="button-addon1"
            onClick={incCount}
          >
            <FaPlusCircle />
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default ItemCount;
