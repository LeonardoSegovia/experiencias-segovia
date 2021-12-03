import "./App.css";
import ExpNavbar from "./components/ExpNavbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const defaultCategory = 1;

  const onAddHandler = (itemId, count) => {
    console.log(`Se agregaron ${count} del item ${itemId}`);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ExpNavbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer onAddListContainer={onAddHandler} />
          </Route>
          <Route path="/Category/:categoryId">
            <ItemListContainer onAddListContainer={onAddHandler}/>
          </Route>
          <Route path="/Item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
