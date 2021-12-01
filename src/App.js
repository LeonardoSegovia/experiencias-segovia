import "./App.css";
import ExpNavbar from "./components/ExpNavbar";
// import ItemListContainer from "./components/ItemListContainer";
import { ApiMock } from "./ApiMock";
import { useState, useEffect } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  // const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState({});
  // const nameList = "Lista de elementos";
  const itemId = 2;

  // const onAddHandler = (itemId, count) => {
    // console.log(`Se agregaron ${count} del item ${itemId}`);
  // };

  // useEffect(() => {
  //   ApiMock.getItemList()
  //     .then((data) => setItemList(data))
  //     .catch((e) => console.log(e));
  // },[]);

  useEffect(() => {
    ApiMock.getItem(itemId)
      .then((res) => setItem(res.data))
      .catch((e) => console.log("Hubo un error al intentar obtener el detalle."));
  });

  return (
    <div className="App">
      <ExpNavbar />
      <br />
      <ItemDetailContainer itemProps={item}></ItemDetailContainer>
      {/* <ItemListContainer
        name={nameList}
        items={itemList}
        onAddListContainer={onAddHandler}
      /> */}
    </div>
  );
}

export default App;
