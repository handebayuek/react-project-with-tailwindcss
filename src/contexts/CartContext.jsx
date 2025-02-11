import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "./reducer";
import { data } from "./data.js";

const CartContext = createContext();

const initialState = data;
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider };
