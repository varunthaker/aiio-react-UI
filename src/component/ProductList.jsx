import { useEffect, useState } from "react";
import { SubCategories } from "./SubCategories";

export function ProductList() {
  const [productData, setProductData] = useState([]);
  const [productState, setProductState] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("./products.json");
        const data = await response.json();
        setProductData(data.products);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchProduct();
  }, []);

  function handlecheckBox(id) {
    setProductState(id);
  }

  return (
    <div>
      <h3>Products</h3>
      <button>Done</button>
      {productData?.map((product) => (
        <div key={product.productId}>
          <label htmlFor={product.productName}>{product.productName}</label>
          <input
            type="checkbox"
            id={product.productId}
            name={product.productName}
            onChange={() => handlecheckBox(product.productId)}
          />
        </div>
      ))}
      {productState && <SubCategories productId={productState} />}
      <button>+ ADD PRODUCT</button>
    </div>
  );
}
