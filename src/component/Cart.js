import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './feature/TaskSlice'; // Assuming updateQuantity action exists

function Cart() {
  const cartItems = useSelector((state) => state.products); // Get cart items from Redux store
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId)); // Dispatch action to remove item from cart
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(updateQuantity({ productId, increment: true })); // Dispatch action to increment quantity
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(updateQuantity({ productId, increment: false })); // Dispatch action to decrement quantity
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center">Cart</h1>

      {cartItems?.length === 0 ? (
        <div className="text-center text-lg text-gray-600">Your cart is empty.</div>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full text-left border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 font-semibold text-sm text-gray-600">Product</th>
                  <th className="py-3 px-4 font-semibold text-sm text-gray-600 text-right">Price</th>
                  <th className="py-3 px-4 font-semibold text-sm text-gray-600 text-right">Quantity</th>
                  <th className="py-3 px-4 font-semibold text-sm text-gray-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-4 text-sm text-gray-800">{item.title}</td>
                    <td className="py-3 px-4 text-sm text-gray-800 text-right">${item.price.toFixed(2)}</td>
                    <td className="py-3 px-4 text-sm text-gray-800 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => handleDecrementQuantity(item.id)}
                          className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleIncrementQuantity(item.id)}
                          className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-800 text-right">
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-semibold">
              Total: <span className="text-blue-600">${calculateTotal().toFixed(2)}</span>
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
