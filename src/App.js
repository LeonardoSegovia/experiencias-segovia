import "./App.css";
import ExpNavbar from "./components/ExpNavbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const nameList = "Lista de elementos";
  //const itemList = ["Item 1: Descripcion 1","Item 2: Descripcion 2","Item 3: Descripcion 3","Item 4: Descripcion 4"]
  const itemList = [
    { name: "Descripcion 1", stock: 1 },
    { name: "Descripcion 2", stock: 2 },
    { name: "Descripcion 3", stock: 3 },
    { name: "Descripcion 4", stock: 4 },
    { name: "Descripcion 5", stock: 5 },
  ];
  
  const onAddHandler = (itemCount,stock) => {
    console.log("Item added.");
  };

  return (
    <div className="App">
      <ExpNavbar />
      <br />
      <ItemListContainer name={nameList} items={itemList} onAdd={onAddHandler} />
    </div>
  );
}

export default App;
