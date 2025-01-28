import NavBar from './components/NavBar';
import Body from './components/Body';
import './App.css';
import { CartProvider } from "./context/CartContext";

function App() {


  return (
    <>
      <CartProvider>
        <div className="navbar-parent">
          <NavBar />
        </div>
        <div className="body-parent">
          {/* Pass the ref to the Body component */}
          <Body />
        </div>

      </CartProvider>
    </>
  );
}

export default App;
