import { useContext } from "react";
import { SubCategories } from "./SubCategorieList";
import "../styles/products.css";
import { MyStoreContext } from "../context/MyStore";

export function ProductList() {
  const { products, setProductID, productID } = useContext(MyStoreContext);

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
              onChange={() => setProductID(product.productId)}
            />
          </div>
        ))}

        {productID && <SubCategories productId={productID} />}
      </div>
    </div>
  );
}
