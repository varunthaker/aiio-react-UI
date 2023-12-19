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

  // console.log(selectedProducts);
  // console.log(selectedSubCatagories);
  // console.log(selectedSubProducts);

  // const productToDisplay = products.filter((product) => {
  //   return product.productId === selectedProducts[products];
  // });

  // const selectedSubCatagories = subCatagories.filter((subCategorie) => {
  //   return subCategorie.productId === productID;
  // });

  // const selectedSubProducts = subProducts.filter((subProduct) => {
  //   return subProduct.subCategoryId === subCatagoryID;
  // });

  return (
    <div className="doneModal">
      <h3>Products </h3>

      {/* {selectedProducts &&
        selectedProducts.map((selectedProduct) => selectedProduct.productName)} */}

      <h3>Sub Categories</h3>
      {/* {selectedProducts &&
        selectedSubCatagories.map(
          (subCatagorie) => `${subCatagorie.subCategoryName}, `
        )} */}
      <h3>Sub Products</h3>
      {/* {selectedSubProducts &&
        selectedSubProducts.map(
          (subProduct) => `${subProduct.subProductName}, `
        )} */}
      <button className="saveButton" onClick={() => handleCloseModal(false)}>
        Save
      </button>
    </div>
  );
}
