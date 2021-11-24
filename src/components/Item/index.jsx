import "./Item.css";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount";
import { Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

const Item = ({ itemId, itemName, description, imageUrl }) => {
  const initialCount = 1;
  const onAddHandler = (itemIdm) => {
    console.log("Add");
  };

  return (
    <Card className="item-container" style={{ width: "16rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{itemName}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <ItemCount initial={initialCount} />
      </Card.Body>
      <Card.Link>
        <div className="buy-action-container">
          <Button variant="outline-dark" onClick={onAddHandler}>
            <FaCartPlus /> Agregar al carrito
          </Button>
        </div>
      </Card.Link>
    </Card>
  );
};

export default Item;
