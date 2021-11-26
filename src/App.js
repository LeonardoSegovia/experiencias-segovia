import "./App.css";
import ExpNavbar from "./components/ExpNavbar";
import ItemListContainer from "./components/ItemListContainer";
import { ApiMock } from "./ApiMock";
import { useState, useEffect } from "react";

function App() {
  const [itemList, setItemList] = useState([]);

  const nameList = "Lista de elementos";

  const onAddHandler = (itemId, count) => {
    console.log(`Se agregaron ${count} del item ${itemId}`);
  };

  useEffect(() => {
    ApiMock.getItemList()
      .then((data) => setItemList(data))
      .catch((e) => console.log(e));
  },[]);

  return (
    <div className="App">
      <ExpNavbar />
      <br />
      <ItemListContainer
        name={nameList}
        items={itemList}
        onAddListContainer={onAddHandler}
      />
    </div>
  );
}

export default App;
