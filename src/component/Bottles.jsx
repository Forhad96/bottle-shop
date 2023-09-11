import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart, removeFromLS } from "../utils/localStorage";
import Cart from "./cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json"
    )
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // Load cart from local storage
  useEffect(() => {
    // console.log(bottles.length);
    if (bottles.length) {
      const localStoredCartData = getStoredCart();
      const savedCart = [];
      for (const id of localStoredCartData) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);

  // buy now handler
  const handlerBuyNow = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  // Remove from cart
  const handlerRemoveFromCart = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromLS(id);
  };
  return (
    <div>
      <h3>Bottles Available:{bottles.length}</h3>
      <Cart cart={cart} handlerRemoveFromCart={handlerRemoveFromCart}></Cart>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handlerBuyNow={handlerBuyNow}
            bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
