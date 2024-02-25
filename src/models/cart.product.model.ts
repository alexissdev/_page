import Product from "./product.model";

export default interface CartProduct extends Product {
  amount: number;
}
