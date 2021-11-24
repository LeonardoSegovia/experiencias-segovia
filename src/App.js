import "./App.css";
import ExpNavbar from "./components/ExpNavbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const nameList = "Lista de elementos";
  //const itemList = ["Item 1: Descripcion 1","Item 2: Descripcion 2","Item 3: Descripcion 3","Item 4: Descripcion 4"]
  const itemList = [
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
    { itemName: "Name 1", description:"Description 1", imageUrl:"#"},
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
