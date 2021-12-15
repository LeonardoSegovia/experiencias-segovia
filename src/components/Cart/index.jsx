import "./Cart.css";
import { Table } from "react-bootstrap";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import { Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaToiletPaperSlash } from "react-icons/fa";

const Cart = () => {
  const [items, addItem, removeItem] = useContext(CartContext);
  let index = 1;

  const removeItemHandler = (itemId) => {
    console.log("Eliminando...", itemId);
    removeItem(itemId);
  };
  let total = 0;
  let itemList = items.map(function (e) {
    total += e.itemPrice * e.itemCount;
    return (
      <tr key={e.itemId}>
        <td>
          <Button
            variant="outline-dark"
            onClick={() => {
              removeItemHandler(e.itemId);
            }}
          >
            Eliminar
          </Button>
        </td>
        <td>{index++}</td>
        <td>{e.itemDesc}</td>
        <td>{e.itemPrice}</td>
        <td>{e.itemCount}</td>
        <td>{e.itemPrice * e.itemCount}</td>
      </tr>
    );
  });

  return (
    <div>
      {items.length > 0 ? (
        <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Actions</th>
                <th>#</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>{itemList}</tbody>
          </Table>
          <div>Total: ${total}</div>
        </div>
      ) : (
        <div>
          <Alert variant="dark" style={{ margin: "20rem" }}>
            Carrito Vacio!
          </Alert>
          <Link to="/">
            {" "}
            <Button variant="outline-dark">Volver</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
