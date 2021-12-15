import { FaShoppingCart } from "react-icons/fa";
import "./CardWidget.css";
import { useContext } from "react";
import {CartContext} from "../CartContext/CartContext";


const CardWiget = () => {
	
	const [items, addItem, removeItem] = useContext(CartContext);

	let count = 0;

	items.forEach((e)=>{
		count += e.itemCount;
	});
  
	return (
    <div className="rigth-apart-action">
      {count}<FaShoppingCart icon={["fal", "code"]} size="28"></FaShoppingCart>
    </div>
  );
};

export default CardWiget;
