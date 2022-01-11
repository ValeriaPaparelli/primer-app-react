import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetalContainer/ItemDetailContainer';
/* import {BrowserRouter, Routes, Route} from 'react-router-dom'; */
/* import { link } from 'react-router-dom'; */

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer 
        greeting='¡Bienvenidos a nuestra tienda!!!' 
      />
    </div>
  );
}

export default App;
