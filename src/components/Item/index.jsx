import "./Item.css";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

const Item = ({
  itemId,
  itemName,
  description,
  imageUrl,
  stock,
  category,
  onAddItem,
}) => {
  const initialCount = 1;

  return (
    <Card className="item-container" style={{ width: "16rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{itemName}</Card.Title>
        <Card.Text>{category} - {description}</Card.Text>
        <Card.Link>
          <Link to={`/item/${itemId}`}>Ver detalle </Link>
        </Card.Link>
        <ItemCount
          initial={initialCount}
          itemId={itemId}
          stock={stock}
          onAdd={onAddItem}
        />
      </Card.Body>
    </Card>
  );
};

export default Item;
