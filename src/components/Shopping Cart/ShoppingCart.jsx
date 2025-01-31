import { useContext } from "react";
import { useRemoveFromCart } from "../../hooks/useRemoveFromCart";
import { CartContext } from "../../contexts/CartContext";
import { useClearCart } from "../../hooks/useClearCart";

function ShoppingCart() {
  const { state, dispatch } = useContext(CartContext);
  console.log("state:", state);
  const removeFromCart = useRemoveFromCart();
  const clearCart = useClearCart();

  const handleQuantityChange = (productId, value) => {
    const numericValue = parseInt(value, 10);
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: productId, quantity: numericValue },
    });
  };

  const totalPrices = state.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
    0
  );

  const productList = state
    .filter((aa) => aa.quantity > 0)
    .map((state) => (
      <div key={state.id} className="flex items-center border-b pb-4">
        <img
          src={state.image}
          alt={state.product_name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="ml-4 flex flex-col flex-grow">
          <h2 className="text-lg font-semibold">{state.product_name}</h2>
          <p className="text-gray-500">{state.bulk}</p>
          <div className="flex items-center mt-2">
            <input
              min="0"
              type="number"
              value={state.quantity || 0}
              onChange={(e) => handleQuantityChange(state.id, e.target.value)}
              className="w-16 p-1 border rounded-md text-center"
            />
            <button
              onClick={() => removeFromCart(state)}
              className="ml-4 text-deleteColor hover:text-red-600"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
          <p className="text-gray-700 mt-2">{(state.price || 0) * (state.quantity || 0)}€</p>
        </div>
      </div>
    ));

  return (
    <div className="h-auto min-h-[80vh] flex justify-center items-center mt-[64px] p-4">
      <div className="w-full max-w-4xl  p-6 flex flex-col">
        {productList.length === 0 ? (
          <div className="flex flex-col text-center">
            <p className="text-lg font-semibold">Your shopping bag is empty</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
              {state.map((product) => (
                <div className="flex justify-center" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.product_name}
                    className="w-24 h-24 object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-darkColor text-left mb-6">Your Bag</h1>
            <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white shadow-lg rounded-lg p-6 flex flex-col">
              {productList}
            </div>
            <div className="mt-6 text-left">
              <h4 className="text-xl font-bold text-darkColor">
                Total Price: <span>{totalPrices}€</span>
              </h4>
              <button
                className="mt-4 text-xl font-bold text-deleteColor hover:text-red-600 transition"
                onClick={clearCart}
              >
                Clear Bag
              </button>
            </div>
          </>
        )}
      </div>

      {productList.length > 0 && (
        <div className="mt-6 flex flex-col items-center">
          <p className="text-lg font-semibold">Proceed to payment step</p>
          <i className="fa-solid fa-circle-arrow-right fa-2xl text-blue-500 mt-2"></i>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
