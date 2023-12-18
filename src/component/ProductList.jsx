import { useContext, useState } from "react";
import { SubCategories } from "./SubCategorieList";
import "../styles/products.css";
import { MyStoreContext } from "../context/MyStore";

export function ProductList() {
  const { products } = useContext(MyStoreContext);
  const [productId, setProductId] = useState("");

  function handlecheckBox(id) {
    setProductId(id);
  }

  return (
    <div className="productsDiv">
      <div className="productListDiv">
        {products?.map((product) => (
          <div className="productDiv" key={product.productId}>
            <label htmlFor={product.productName}>{product.productName}</label>
            <input
              type="checkbox"
              id={product.productId}
              name={product.productName}
              onChange={() => handlecheckBox(product.productId)}
            />
          </div>
        ))}

        {productId && <SubCategories productId={productId} />}
      </div>
    </div>
  );
}
