import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetalContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';


function App() {
  return (
    //Todo lo que envuelvo pasan a ser children
    <CartContextProvider> 
      <BrowserRouter className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route path='/detalle/:productId' element={<ItemDetailContainer />}/>
          <Route path='/categoria/:category' element={<ItemListContainer />}/>
          <Route path='/carrito' element={<Cart />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>  
  );
}

export default App;
