import { createContext, useState, useEffect } from "react";

//Shop creation
export const MyStoreContext = createContext("");

// Global Func in Shop
export function MyStoreContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [subCatagories, setSubCatagories] = useState([]);
  const [subProducts, setSubProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState({});
  const [selectedSubCatagories, setSelectedSubCatagories] = useState({});
  const [selectedSubProducts, setSelectedSubProducts] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products/");
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
        const response = await fetch("http://localhost:8000/subcategories/");
        const data = await response.json();
        setSubCatagories(data.subcategories);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchsubCatagories();
  }, []);

  useEffect(() => {
    const fetchsubProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/subproducts/");
        const data = await response.json();
        setSubProducts(data.subproducts);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchsubProducts();
  }, []);

  const addSelectedProduct = (productId) => {
    setSelectedProducts({
      ...selectedProducts,
      [productId]: !selectedProducts[productId],
    });
  };

  const addSubCatagory = (subcatgoryId) => {
    setSelectedSubCatagories({
      ...selectedSubCatagories,
      [subcatgoryId]: !selectedSubCatagories[subcatgoryId],
    });
  };

  const addSubProduct = (subproductId) => {
    setSelectedSubProducts({
      ...selectedSubProducts,
      [subproductId]: !selectedSubProducts[subproductId],
    });
  };
  const contextValue = {
    products,
    subCatagories,
    subProducts,
    addSelectedProduct,
    addSubCatagory,
    addSubProduct,
    selectedProducts,
    selectedSubCatagories,
    selectedSubProducts,
  };

  return (
    <MyStoreContext.Provider value={contextValue}>
      {props.children}
    </MyStoreContext.Provider>
  );
}
