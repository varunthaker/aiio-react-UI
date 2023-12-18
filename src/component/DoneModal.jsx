import { useContext } from "react";
import { MyStoreContext } from "../context/MyStore";

export function DoneModal({ handleCloseModal }) {
  const { products, subCatagories, subProducts, productID, subCatagoryID } =
    useContext(MyStoreContext);

  const selectedProducts = products.filter((product) => {
    return product.productId === productID;
  });

  const selectedSubCatagories = subCatagories.filter((subCategorie) => {
    return subCategorie.productId === productID;
  });

  const selectedSubProducts = subProducts.filter((subProduct) => {
    return subProduct.subCategoryId === subCatagoryID;
  });

  return (
    <>
      <h3>Products </h3>

      {productID &&
        selectedProducts.map((selectedProduct) => selectedProduct.productName)}

      <h3>Sub Categories</h3>
      {productID &&
        selectedSubCatagories.map(
          (subCatagorie) => `${subCatagorie.subCategoryName}, `
        )}
      <h3>Sub Products</h3>
      {subCatagoryID &&
        selectedSubProducts.map(
          (subProduct) => `${subProduct.subProductName}, `
        )}
      <button onClick={() => handleCloseModal(false)}>Save</button>
    </>
  );
}
