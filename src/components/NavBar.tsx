
import UserIcon from "./shared/UserIcon"
import CartIcon from "./shared/CartIcon"
import DownArrow from "./shared/DownArrow"

import reactLogo from './assets/react.svg'
import ChicksLogo from '../assets/chicks_logo.svg'

const Navbar = () => {
  const handleSignIn = () => {
    // alert("Button clicked!");
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/">
          <img src={ChicksLogo} className="logo" alt="Chicks logo" />
        </a>
        {/* <div className="navbar-logo">MyApp</div> */}
        <div className="navbar-parent">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/" className="navbar-link c-flex">
              CURRENCY
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/items" className="navbar-link c-flex">
              ITEMS
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/accounts" className="navbar-link c-flex">
              ACCOUNTS
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/services" className="navbar-link c-flex">
              SERVICES
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/swap" className="navbar-link c-flex">
              SWAP
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
            <li className="navbar-item">
              <a href="/sell" className="navbar-link c-flex">
              SELL
              <DownArrow width="20" height="20" color="#ffffff"/>
              </a>
            </li>
          </ul>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/usd" className="navbar-link">USD</a>
              <DownArrow width="20" height="20" color="#ffffff"/>
            </li>
            <li className="navbar-item">
              <div className="c-flex">
                <a href="/cart" className="navbar-link c-flex">
                <CartIcon width="20" height="20" color="#ffffff" className="cart-icon"/>
                CART (0)</a>
              </div>
            </li>
            <button className="c-flex c-w-8 sign-in-btn" onClick={handleSignIn}>
              <div>
                SIGN IN
              </div>
              <div>
                <UserIcon width="20" height="20" color="#303141" />
              </div>
            </button>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;