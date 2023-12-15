import { useEffect, useState } from "react";
import productData from "../data/products.json";
import { SubCategories } from "./SubCategories";

console.log(productData.products);

export function ProductList() {
  const [productState, setProductState] = useState("");

  function handlecheckBox(id) {
    setProductState(id);
  }

  //   useEffect(() => {
  //     async function fetchProduct() {
  //       try {
  //         const response = await fetch("../data/products.json");
  //         const productData = await response.json();
  //         console.log("Products are", productData.products);
  //       } catch (error) {
  //         console.log("Error Fetching data", error);
  //       }
  //     }
  //     fetchProduct();
  //   }, []);

  return (
    <div>
      <h3>Products</h3>
      <button>Done</button>
      {productData.products?.map((product) => (
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

      {productState === 1 && <SubCategories productId={productState} />}
      {productState === 2 && <SubCategories productId={productState} />}

      <button>+ ADD PRODUCT</button>
    </div>
  );
}
