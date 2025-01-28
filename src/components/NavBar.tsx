
import {useState} from "react"
import UserIcon from "./shared/icons/UserIcon"
import CartIcon from "./shared/icons/CartIcon"
import DownArrow from "./shared/icons/DownArrow"

import ChicksLogo from '../assets/chicks_logo.svg'
import { useCart } from "../context/CartContext";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleSignIn = () => {
    // alert("Button clicked!");
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="menu-icon" onClick={toggleMenu}>
          <MenuIcon/>
        </button>
        <a href="/">
          <div className="c-flex">
            <img src={ChicksLogo} className="logo" alt="Chicks logo" />
            <div className="navbar-divider"></div>
          </div>
        </a>
        <div className="navbar-parent">
          <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
            <li className="navbar-item">
              <a href="/" className="navbar-link c-flex">
              CURRENCY
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link c-flex">
              ITEMS
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link c-flex">
              ACCOUNTS
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link c-flex">
              SERVICES
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link c-flex">
              SWAP
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link c-flex">
              SELL
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
            <li className="navbar-item navbar-currency-link">
              <a href="/" className="navbar-link">
              USD
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
            <div className="c-flex" >
              <a href="/" className="navbar-link c-flex">
              <CartIcon width="20" height="20" color="#ffffff" className="cart-icon"/>
              CART ({cartCount})</a>
            </div>
            <button className="c-flex c-w-8 sign-in-btn" style={{width: '150px'}} onClick={handleSignIn}>
                <div>
                  SIGN IN
                </div>
                <div>
                  <UserIcon width="20" height="20" color="#303141" />
                </div>
            </button>
            {/* <li className="navbar-item navbar-login c-flex">
                
            </li> */}
            
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;