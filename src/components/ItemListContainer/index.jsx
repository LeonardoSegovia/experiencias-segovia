import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { ApiProducts } from "../../apis/ApiProducts";
import ItemList from "../ItemList";
import { useParams } from "react-router";

const ItemListContainer = ({ onAddListContainer }) => {
  const { categoryId } = useParams();

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    ApiProducts.getProducts()
      .then((res) =>
        setItemList(
          res.data.filter(
            (e) => e.category.includes(categoryId) || categoryId === undefined
          )
        )
      )
      .catch((e) => {
        console.error(`Error: No se pueden obtener los items. ex ${e}`);
      });
  }, [categoryId]);

  return (
    <div className="list-item-container">
      <ItemList items={itemList} onAddList={onAddListContainer} />
    </div>
  );
};

export default ItemListContainer;
