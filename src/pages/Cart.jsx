import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products = [], currency = '$', cartItems = {}, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-10 px-4 sm:px-10">
  <div className="text-2xl font-bold mb-6 text-center">
    <Title text1="Your" text2="Cart" />
  </div>
  <div>
    {cartData.length === 0 ? (
      <p className="text-center mt-6 text-gray-500 text-lg">Your cart is empty!</p>
    ) : (
      cartData.map((item) => {
        const productData = products.find((product) => product._id === item._id) || {};
        if (!productData.name) return null;

        return (
          <div
            key={`${item._id}-${item.size}`}
            className="py-6 border-b flex flex-col sm:flex-row items-center sm:items-start gap-4"
          >
            {/* Product Image and Name */}
            <div className="flex items-center gap-4 w-full sm:w-2/3">
              <div className="flex-shrink-0">
                {productData.image?.[0] ? (
                  <img
                    className="w-20 h-20 object-cover rounded-md border"
                    src={productData.image[0]}
                    alt={productData.name}
                  />
                ) : (
                  <span className="text-gray-400 text-sm">No Image</span>
                )}
              </div>
              <p className="text-sm sm:text-base font-medium">{productData.name}</p>
            </div>

            {/* Price, Size, Quantity, and Remove */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:w-1/3">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <p className="text-sm sm:text-base">
                  {currency}
                  {productData.price}
                </p>
                <p className="px-3 py-1 border rounded bg-gray-50 text-gray-700 text-xs">
                  {item.size}
                </p>
              </div>

              <input
                className="border rounded px-2 py-1 text-sm max-w-[70px] sm:max-w-[100px]"
                onChange={(e) => {
                  const newValue = Number(e.target.value);
                  updateQuantity(item._id, item.size, newValue > 0 ? newValue : 0);
                }}
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-6 h-6 sm:w-6  cursor-pointer hover:scale-110 transition-transform duration-150"
                src={assets.bin_icon}
                alt="Remove item"
              />
            </div>
          </div>
        );
      })
    )}
  </div>

  {/* Cart Total Section */}
  <div className="flex justify-end mt-10">
    <div className="w-full sm:w-[450px] border rounded-lg p-6 shadow-md bg-white">
      <CartTotal />
      <div className='w-full justify-end'>
         <button onClick={() => navigate('/place-oder')} type="button"className='bg-black text-white text-sm px-8 my-8 py-3'> 
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Cart;
