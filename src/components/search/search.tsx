"use client";
import React from "react";
import { useState, useMemo, useEffect } from "react";
import Product from "@/models/product.model";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

export default function Search({
  products,
  setSearchList,
}: {
  products: Product[];
  setSearchList: (products: Product[]) => void;
}) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
  }, [search]);

  useEffect(() => {
    setSearchList(filteredProducts);
  }, [filteredProducts]);

  return (
    <div
      className={`relative text-white hover:w-40 h-8 flex items-start justify-end group transition all shadow-md ${
        search.length === 0 ? "w-0" : "w-40"
      }`}
    >
      <div
        className="absolute -right-2 w-8 h-8 flex justify-center items-center bg-slate-600 group-hover:bg-slate-800 rounded-full cursor"
        onClick={() => {
          search.length > 0 ? setSearch("") : null;
        }}
      >
        {search.length < 1 ? <AiOutlineSearch /> : <AiOutlineClose />}
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-full pl-2 bg-gray-700 outline-none rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="w-full absolute top-[100%] bg-gray-700 shadow-md flex flex-col rounded-b-md">
        {search.length > 0 &&
          (filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <span key={product.name} className="p-2 hover:bg-gray-600">
                {product.name}
              </span>
            ))
          ) : (
            <span className="pl-2">no found</span>
          ))}
      </div>
    </div>
  );
}
