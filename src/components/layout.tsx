"use client";
import React from "react";
import useCart from "@/hooks/use.cart";
import useSearch from "@/hooks/use.search";

import Navigation from "./navbar";
import Footer from "./footer";
import Products from "./product/products";

import { products } from "@/util/local.storage";

export default function Layout() {
  const { cart, addToCart, viewCart, toggleCart } = useCart({
    initialCart: [],
    initialViewCart: false,
  });

  const { search, setSearch } = useSearch({
    initialSearch: products,
  });

  return (
    <>
      <Navigation
        setSearchList={setSearch}
        products={products}
        cart={cart}
        viewCart={viewCart}
        toggleCart={toggleCart}
      />
      <main className="text-[#0A283E] flex flex-row justify-center items-center">
        <div className="w-[1000px] md:w-[1200px]">
          <Products
            products={search.length === 0 ? products : search}
            addToCart={addToCart}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
