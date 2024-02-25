"use client";
import React from "react";

import Product from "@/models/product.model";
import CartProduct from "@/models/cart.product.model";

export default function ProductCard({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (product: CartProduct) => void;
}) {
  return (
    <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
      <a
        onClick={() => addToCart({ ...product, amount: 1 })}
        className="cursor-pointer"
      >
        <figure>
          <img
            src={product.image}
            className="rounded-t h-72 w-full object-cover"
          />

          <figcaption className="p-4">
            <p className="montserrat text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
              {product.name}
            </p>
            <small className="leading-5 text-gray-500 dark:text-gray-400">
              {product.description}
            </small>
          </figcaption>
        </figure>
      </a>
    </div>
  );
}
