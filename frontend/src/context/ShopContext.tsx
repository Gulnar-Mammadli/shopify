import { createContext } from "react";
import all_product from "../assets/all_product";

export type Product = {
  id: number;
  image: string;
  name: string;
  new_price: number;
  old_price: number;
  category: string;
};

type ShopContextType = {
  all_product: Product[];
};

type Props = {
  children: React.ReactNode;
};

export const ShopContext = createContext<ShopContextType | null>(null);

const ShopContextProvider = ({ children }: Props) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
