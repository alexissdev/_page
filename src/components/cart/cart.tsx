import { AiOutlineShoppingCart } from "react-icons/ai";

import CartProduct from "@/models/cart.product.model";
import BubbleAlert from "./cart.alert";
import CartDetails from "./cart.details";

export default function Cart({
  cart,
  viewCart,
  toggleCart,
}: {
  cart: CartProduct[];
  viewCart: boolean;
  toggleCart: () => void;
}) {
  const amount: number = cart.reduce(
    (acc: number, product: CartProduct) => acc + product.amount,
    0
  );

  return (
    <div>
      <span className="relative left-3 top-5">
        {amount > 0 && <BubbleAlert value={amount} />}
      </span>

      <button
        onClick={toggleCart}
        className="border-none cursor-pointer appearance-none"
      >
        {<AiOutlineShoppingCart size="36" />}
      </button>
      {viewCart && <CartDetails cart={cart} />}
    </div>
  );
}
