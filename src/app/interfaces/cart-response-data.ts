import { CartResponseprodect } from "./cart-responseprodect";

export interface CartResponseData {

  cartOwner: string;
  products: CartResponseprodect[];
  totalPrice: number;
  totalCartPrice: number;
  status: string;  
  _id: string;
}
