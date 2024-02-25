import { useState } from "react";
import CartProduct from "@/models/cart.product.model";

export default function useCart({
  initialCart = [],
  initialViewCart = false,
}: {
  initialCart?: CartProduct[];
  initialViewCart?: boolean;
}) {
  const [cart, setCart] = useState(initialCart);
  const [viewCart, setViewCart] = useState(initialViewCart);

  /**
   * Adding the new product to the cart.
   * @param product The product to add to the cart.
   * @returns void.
   */

  const addToCart = (product: CartProduct) => {
    if (cart.find((item) => item.name === product.name)) {
      const newCart: CartProduct[] = cart.map((item) =>
        item.name == product.name ? { ...item, amount: item.amount + 1 } : item
      );

      return setCart(newCart);
    }

    setCart([...cart, { ...product, amount: 1 }]);
  };

  /**
   * Toggling the cart view.
   * @returns void.
   */

  const toggleCart = () => {
    if (!cart.length) {
      return;
    }

    setViewCart(!viewCart);
  };

  return { cart, addToCart, viewCart, toggleCart };
}
