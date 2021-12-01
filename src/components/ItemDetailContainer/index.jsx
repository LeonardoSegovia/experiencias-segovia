import { Container, Row, Col } from "react-bootstrap";
import ItemDetail from "../ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ itemProps }) => {
  console.log(itemProps);
  return (
    <div className="item-detail-internal">
      {itemProps ? (
        <Container>
          <Row>
            <Col>
              <div className="item-image-container">Proximamente componente de imagenes del item</div>
            </Col>
            <Col md="6">
              <div className="item-main-detail">
                <ItemDetail item={itemProps} />
              </div>
            </Col>
            <Col>
              <div className="item-buy-container">Proximamente componente de opciones de compra</div>
            </Col>
          </Row>
        </Container>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
