import { useContext } from "react";
import { SubCategories } from "./SubCategorieList";
import "../styles/products.css";
import { MyStoreContext } from "../context/MyStore";
import Product from "./Product";

export function ProductList() {
  const { products, selectedProducts } = useContext(MyStoreContext);

  return (
    <div className="productsContainer">
      <div className="productListDiv">
        {products?.map((product, idx) => {
          return (
            <div key={idx}>
              <Product key={idx} product={product} />
              {selectedProducts[product.productId] && (
                <SubCategories productId={product.productId} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
