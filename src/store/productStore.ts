import { create } from "zustand";
import { TProduct } from "../../type";

interface ProductState {
  products: TProduct[];
  setProducts: (p: TProduct[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products: TProduct[]) => set(() => ({ products: products })),
}));
