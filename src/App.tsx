import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import { CartProvider } from "./context/CartContext";
import { useEffect, useState, useRef } from 'react';

function App() {
  const [bodyEndHeight, setBodyEndHeight] = useState("100%"); // Initial height of .body-end
  const mainContainerRef = useRef<HTMLDivElement>(null); // Correctly typed ref

  useEffect(() => {
    const updateBodyEndHeight = () => {
      // Get the height of .main-container dynamically
      const mainContainerHeight = mainContainerRef.current
        ? mainContainerRef.current.offsetHeight
        : 0;

      // Update the height of .body-end
      setBodyEndHeight(`${mainContainerHeight}px`);
    };

    // Call the function on mount and whenever the window resizes
    updateBodyEndHeight();
    window.addEventListener("resize", updateBodyEndHeight);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", updateBodyEndHeight);
  }, []);

  return (
    <>
      <CartProvider>
        <div className="navbar-parent">
          <NavBar />
        </div>
        <div className="body-parent">
          {/* Pass the ref to the Body component */}
          <Body mainContainerRef={mainContainerRef} />
        </div>
        <div
          className="body-end"
          style={{ height: bodyEndHeight, backgroundColor: "#3d3e4f" }}
        ></div>
        <div className="footer-parent">
          <Footer />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
