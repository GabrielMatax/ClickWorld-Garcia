import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from "./contexts/CartContext";
import Cart from './components/Cart.jsx';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>  
                <Route index element={<ItemListContainer/>}> </Route>
                <Route path="/category/:name" element={<ItemListContainer/>}> </Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}> </Route>
                <Route path="*" element={<div>ERROR 404</div>}> </Route>
                <Route path="/cart" element={<Cart/>}> </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App;
