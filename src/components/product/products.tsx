"use client";
import React from "react";

import Product from "@/models/product.model";
import ProductCard from "./product.card";
import CartProduct from "@/models/cart.product.model";

export default function Products({
  products,
  addToCart,
}: {
  products: Product[];
  addToCart: (product: CartProduct) => void;
}) {
  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product: Product) => {
        return (
          <ProductCard
            key={product.name}
            product={product}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
}
