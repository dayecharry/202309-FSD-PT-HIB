import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // estos  datos  normalmente  son variables, pueden venir de un fetch, form, etc

  const [product, setProduct] = useState([
    {
      name: "Cocacola",
      price: 2,
    },
  ]);

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};
