"use client";

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';  // Import Image từ next/image

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load products');
        setLoading(false);
        console.log('Axios error:', error);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-3xl font-bold text-center mb-[30px]">
        Sản phẩm HOT
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                className="fill-gray-800 inline-block"
                viewBox="0 0 64 64"
              >
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"
                />
              </svg>
            </div>

            <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image
                src={product.image}  // Sử dụng Image thay cho img
                alt={product.title}
                width={500}  // Cung cấp width cho ảnh
                height={500}  // Cung cấp height cho ảnh
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-6 bg-white">
              <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
              <h4 className="text-lg text-gray-800 font-bold mt-2">
                ${product.price.toLocaleString()}
              </h4>
              <p className="text-gray-600 text-sm mt-2">{product.description.substring(0, 100)}...</p>

              <div className="flex space-x-2 mt-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 ${index < Math.round(product.rating.rate) ? 'fill-[#facc15]' : 'fill-[#CED5D8]'}`}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-500">({product.rating.count})</span>
              </div>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
