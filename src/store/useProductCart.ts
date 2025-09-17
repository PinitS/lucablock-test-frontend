import { ProductAttributeInterface } from "@/interface/ProductAttributeInterface";
import { create } from "zustand";

interface ProductCartState {
  cartList: ProductAttributeInterface[];
  setCart: (updateCart: ProductAttributeInterface[]) => void;
}

export const useCart = create<ProductCartState>((set) => ({
  cartList: [],
  setCart: (updateCart) => set({ cartList: updateCart }),
}));
