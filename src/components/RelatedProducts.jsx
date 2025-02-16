import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title'; // Ensure Title component is correctly named
import { Link } from 'react-router-dom'; // Import Link from React Router

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const productsCopy = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );

      setRelated(productsCopy.slice(0, 5)); // Limit to 5 related products
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4">
        {related.map((item) => (
          <Link key={item._id} to={`/product/${item._id}`} className="flex flex-col">
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;


