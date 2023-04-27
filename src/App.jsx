import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductCard />
      <ItemListContainer greeting="Gracias por elegirnos"/>
      <ItemCount />
    </div>
  );
}

export default App;
