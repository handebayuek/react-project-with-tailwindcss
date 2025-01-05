import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
// import CartIcon from "../../assets/icons/user.svg";

function NavBar() {
  const { state } = useContext(CartContext);
  const showQuantity = state.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0,
  );
  return (
    <>
      <div>
        <h1 className="brand-name">BotaniPure.</h1>
      </div>

      <nav>
        <ul className="nav-ul">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Our Products</NavLink>
          </li>
          <li>
            <NavLink to="/guidepage">Skin Care Guide</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/shoppingcart">
              {/* <CartIcon /> */}
              Shopping Cart {showQuantity > 0 ? "(" + showQuantity + ")" : ""}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
