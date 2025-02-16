import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const oders = () => {

  const { products,currency } = useContext(ShopContext)
  return (
    <div className="border-t pt-16">
  <div className="text-2xl mb-6">
    <Title text1="My" text2="Orders" />
  </div>

  <div className="space-y-6">
    {products.slice(1, 4).map((item, index) => (
      <div
        key={index}
        className="py-4 border rounded-lg shadow-md text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-4"
      >
        {/* Product Image */}
        <div className="flex items-start gap-6">
          <img
            className="w-16 sm:w-20 rounded-md object-cover"
            src={item.image[0]}
            alt={`Image of ${item.name}`}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-2">
          <p className="sm:text-lg font-semibold">{item.name}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <p className="font-medium text-gray-800">
              {currency}
              {item.price}
            </p>
            <p>Quantity: 1</p>
            <p>Size: M</p>
          </div>
          <p className="text-sm text-gray-500">
            Date: <span className="text-gray-700">23.11.2024</span>
          </p>
        </div>

        {/* Order Status and Button */}
        <div className="flex justify-between items-center gap-6 md:w-1/2">
          <div className="flex items-center gap-2">
            <span className="min-w-[8px] h-[8px] rounded-full bg-green-500"></span>
            <p className="text-sm font-medium">Ready to Ship</p>
          </div>
          <button className="border border-gray-300 hover:bg-gray-100 px-4 py-2 text-sm font-medium rounded-md transition">
            Track Order
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default oders