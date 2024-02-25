import CartProduct from "@/models/cart.product.model";

export default function CartDetails({ cart }: { cart: CartProduct[] }) {
  return (
    <div className="bg-gray-600 absolute left-2 lg:left-[83%] mt-8 shadow-sm rounded-lg w-80">
      <ul className="m-o p-0">
        {cart.map((product) => (
          <li
            key={product.name}
            className="flex justify-between items-center py-6 px-5 rounded-2xl bg-primary list-none text-white w-auto h-auto"
          >
            <img
              src={product.image}
              alt={product.name}
              width={50}
              height={32}
            />
            <span>{product.name}</span>
            {""}
            <span>{product.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
