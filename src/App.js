import { useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./Layouts/Header";
import Meals from "./Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [openCart, setOpenCart] = useState(false);


  const showCartModal = () => {
    console.log('clicked');
    setOpenCart(true);
  }

  const hideCartModal = () => {
    setOpenCart(false);
  }
  return (
    <CartProvider>
      {openCart && <Cart  closeCartModal={hideCartModal}/>}
      <Header openCartModal={showCartModal}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
