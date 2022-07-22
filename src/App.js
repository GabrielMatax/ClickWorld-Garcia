import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>  
              <Route index element={<ItemListContainer/>}> </Route>
              <Route path="/category/:name" element={<ItemListContainer/>}> </Route>
              <Route path="/item/:id" element={<ItemDetailContainer/>}> </Route>
              <Route path="*" element={<div>ERROR 404</div>}> </Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
