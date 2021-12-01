import "./Item.css";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount";
import Button from "react-bootstrap/Button";

const Item = ({
  itemId,
  itemName,
  description,
  imageUrl,
  stock,
  onAddItem,
}) => {
  const initialCount = 1;

  return (
    <Card className="item-container" style={{ width: "16rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{itemName}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link>
          <Button variant="outline-success">Ver detalle</Button>
        </Card.Link>
        <ItemCount
          initial={initialCount}
          itemId={itemId}
          stock={stock}
          onAddItemCount={onAddItem}
        />
      </Card.Body>
    </Card>
  );
};

export default Item;
