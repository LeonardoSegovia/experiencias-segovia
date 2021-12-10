import "./App.css";
import ExpNavbar from "./components/ExpNavbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext/CartContext";

function App() {
  const onAddHandler = (itemId, count) => {
    console.log(`Se agregaron ${count} del item ${itemId}`);
  };

  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <ExpNavbar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer onAddListContainer={onAddHandler} />
            </Route>
            <Route path="/Category/:categoryId">
              <ItemListContainer onAddListContainer={onAddHandler} />
            </Route>
            <Route path="/Item/:id">
              <ItemDetailContainer />
            </Route>{" "}
            <Route path="/Cart">
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
