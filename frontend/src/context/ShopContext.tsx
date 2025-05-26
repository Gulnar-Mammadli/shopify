import { createContext, useContext } from "react";
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

const ShopContext = createContext<ShopContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context)
    throw new Error(
      "useShopContext can only be used inside an ShopContextProvider"
    );
  return context;
};

const ShopContextProvider = ({ children }: Props) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
