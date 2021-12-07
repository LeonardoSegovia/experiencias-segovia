import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail";
import "./ItemDetailContainer.css";
import { ApiProducts } from "../../apis/ApiProducts";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    console.warn("Product Id", id);
    ApiProducts.getProduct(id)
    .then((res) => setItem(res.data))
    .catch((e) => console.log("Error al obtener el item."));
  }, [id]);

  return (
    <div className="item-detail-internal">
      {item ? (
        <Container>
          <Row>
            <Col>
              <div className="item-image-container">
                Proximamente componente de imagenes del item
              </div>
            </Col>
            <Col md="6">
              <div className="item-main-detail">
                <ItemDetail item={item} />
              </div>
            </Col>
            <Col>
              <div className="item-buy-container">
                Proximamente componente de opciones de compra
              </div>
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
