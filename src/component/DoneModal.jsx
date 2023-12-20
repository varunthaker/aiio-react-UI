import { useContext } from "react";
import "../styles/products.css";
import { MyStoreContext } from "../context/MyStore";

export function DoneModal({ handleCloseModal }) {
  const {
    products,
    subCatagories,
    subProducts,
    selectedProducts,
    selectedSubCatagories,
    selectedSubProducts,
  } = useContext(MyStoreContext);

  // get array all keys
  // get the keys whose values are true
  // find product whose key same as productID
  // return productName
  // filter if null

  const productsToDisplay = Object.keys(selectedProducts)
    .filter((keyId) => selectedProducts[keyId])
    .map((keyId) => {
      const product = products.find(
        (prod) => prod.productId === parseInt(keyId)
      );
      return product ? product.productName : null;
    })
    .filter((productName) => productName !== null);

  const subCategoriesToDisplay = Object.keys(selectedSubCatagories)
    .filter((keyId) => selectedSubCatagories[keyId])
    .map((keyId) => {
      const subCategory = subCatagories.find(
        (subCat) => subCat.subCategoryId === parseInt(keyId)
      );
      return subCategory ? subCategory.subCategoryName : null;
    })
    .filter((subCatagorieName) => subCatagorieName !== null);

  const subProductsToDisplay = Object.keys(selectedSubProducts)
    .filter((keyId) => selectedSubProducts[keyId])
    .map((keyId) => {
      const subProduct = subProducts.find(
        (subProd) => subProd.subProductId === parseInt(keyId)
      );
      return subProduct ? subProduct.subProductName : null;
    })
    .filter((subProductName) => subProductName !== null);

  return (
    <div className="doneModal">
      <h3>Products </h3>

      {selectedProducts &&
        productsToDisplay.map((productToDisplay) => `${productToDisplay}, `)}

      <h3>Sub Categories</h3>
      {selectedSubCatagories &&
        subCategoriesToDisplay.map((subCatagorie) => `${subCatagorie}, `)}
      <h3>Sub Products</h3>
      {selectedSubProducts &&
        subProductsToDisplay.map((subProduct) => `${subProduct}, `)}
      <button className="saveButton" onClick={() => handleCloseModal(false)}>
        Close
      </button>
    </div>
  );
}
