import { createContext, useState, useEffect } from "react";

//Shop creation
export const MyStoreContext = createContext("");

// Global Func in Shop
export function MyStoreContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [subCatagories, setSubCatagories] = useState([]);
  const [subProducts, setSubProducts] = useState([]);
  const [productID, setProductID] = useState("");
  const [subCatagoryID, setSubCatagoryID] = useState("");
  const [subProductID, setSubProductID] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("./products.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchsubCatagories = async () => {
      try {
        const response = await fetch("./subcategories.json");
        const data = await response.json();
        setSubCatagories(data.subcatergories);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchsubCatagories();
  }, []);

  useEffect(() => {
    const fetchsubProducts = async () => {
      try {
        const response = await fetch("./subproducts.json");
        const data = await response.json();
        setSubProducts(data.subproducts);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchsubProducts();
  }, []);

  const contextValue = {
    products,
    subCatagories,
    subProducts,
    productID,
    setProductID,
    subCatagoryID,
    setSubCatagoryID,
    subProductID,
    setSubProductID,
  };

  return (
    <MyStoreContext.Provider value={contextValue}>
      {props.children}
    </MyStoreContext.Provider>
  );
}
