import { create } from "zustand";
import { TProduct } from "../../type";

interface ProductState {
  filteredProduct: string;
  products: TProduct[];
  setFilter: (p: string) => void;
  setProducts: (p: TProduct[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  filteredProduct: "",
  products: [],
  setFilter: (p: string) => set(() => ({ filteredProduct: p })),
  setProducts: (products: TProduct[]) => set(() => ({ products: products })),
}));
