import React, { createContext, useState, useEffect } from "react";
import ProductData from "../products.json";
const FetchProductContext = createContext();
// Creating a provider
const FetchProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [productCatagoryArr, setProductCatagoryArr] = useState();
  const [nextProductNum, setNextProductNum] = useState(20);
  const [initialProductNum, setInitialProductNum] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      // const data = await fetch("https://api.escuelajs.co/api/v1/products");
      // const responseData = await data.json();
      const responseData = ProductData.products;
      const categoryArr = [];
      responseData.forEach((product) => {
        if (!categoryArr.includes(product.category)) {
          categoryArr.push(product.category);
        }
      });
      setProductCatagoryArr(categoryArr);
      setProducts(responseData);
    };
    fetchData();
  }, []);

  return (
    <FetchProductContext.Provider
      value={{
        productCatagoryArr,
        products,
        setProducts,
        nextProductNum,
        setNextProductNum,
        initialProductNum,
        setInitialProductNum,
      }}
    >
      {children}
    </FetchProductContext.Provider>
  );
};
export { FetchProductContextProvider, FetchProductContext };
