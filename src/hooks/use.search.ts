import { useState } from "react";
import Product from "@/models/product.model";

export default function useSearch({
  initialSearch = [],
}: {
  initialSearch?: Product[];
}) {
  const [search, setSearch] = useState(initialSearch);

  /**
   * Searching for the product.
   * @param query The query to search for.
   * @returns void.
   */

  const searchProduct = (query: string) => {
    if (!query) {
      return setSearch([]);
    }

    const newSearch: Product[] = initialSearch.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearch(newSearch);
  };

  return { search, setSearch, searchProduct };
}
