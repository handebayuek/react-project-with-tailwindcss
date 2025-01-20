import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import UserIcon from "../../assets/icons/user.svg?react";
import CardIcon from "../../assets/icons/card.svg?react";

function NavBar() {
  const { state } = useContext(CartContext);
  const showQuantity = state.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0,
  );
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 z-50 w-full border-b border-darkColor bg-navbarColor">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="special:text-2xl font-brand text-lg text-accentColor sm:text-xl lg:text-3xl">
          <NavLink to="/">BotaniPure.</NavLink>
        </div>

        {/* Hamburger Menu for Small and Medium Screens */}
        <button
          className="special:hidden block text-2xl text-darkColor"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Nav Links */}
        <ul
          className={`special:relative special:flex special:w-full special:justify-end absolute left-0 top-0 w-full bg-navbarColor transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="special:border-none border-b border-gray-200">
            <NavLink
              to="/"
              className="block px-4 py-2 text-sm text-darkColor hover:text-accentColor lg:text-base"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="special:border-none border-b border-gray-200">
            <NavLink
              to="/about"
              className="block px-4 py-2 text-sm text-darkColor hover:text-accentColor lg:text-base"
              onClick={() => setMenuOpen(false)}
            >
              About Our Products
            </NavLink>
          </li>
          <li className="special:border-none border-b border-gray-200">
            <NavLink
              to="/guidepage"
              className="block px-4 py-2 text-sm text-darkColor hover:text-accentColor lg:text-base"
              onClick={() => setMenuOpen(false)}
            >
              Skin Care Guide
            </NavLink>
          </li>
          <li className="special:border-none border-b border-gray-200">
            <NavLink
              to="/product"
              className="block px-4 py-2 text-sm text-darkColor hover:text-accentColor lg:text-base"
              onClick={() => setMenuOpen(false)}
            >
              Product
            </NavLink>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2">
            <UserIcon className="special:h-6 special:w-6 h-5 w-5" />
            <NavLink
              to="/login"
              className="text-sm text-darkColor hover:text-accentColor lg:text-base"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2">
            <CardIcon className="special:h-6 special:w-6 h-5 w-5" />
            <NavLink
              to="/shoppingcart"
              className="text-sm text-darkColor hover:text-accentColor lg:text-base"
              onClick={() => setMenuOpen(false)}
            >
              Shopping Cart {showQuantity > 0 ? "(" + showQuantity + ")" : ""}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
