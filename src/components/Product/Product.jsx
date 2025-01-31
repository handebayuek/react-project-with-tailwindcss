import { useAddToCart } from "../../hooks/useAddToCart";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export default function Product() {
  const { state } = useContext(CartContext);
  const addToCart = useAddToCart();

  return (
    <div className="container mt-[64px] mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {state.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-6 border p-6 rounded-lg shadow-md bg-white`}
          >
            
            <div className="w-full md:w-1/2">
              <img
                src={product.image}
                alt={product.product_name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

       
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold">{product.product_name}</h2>
              <h6 className="text-lg text-gray-500">{product.bulk}</h6>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-lg font-semibold mt-2">{product.price}€</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 px-4 py-2 bg-darkGreenColor text-white rounded-lg hover:bg-green-700 transition"
              >
                Add to Bag
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
