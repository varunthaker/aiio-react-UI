import subProductData from "../data/subproducts.json";

console.log("subProductData", subProductData.subproducts);

export function SubProduct({ subCategoryId }) {
  console.log(subCategoryId);
  const subProductArray = subProductData.subproducts?.filter(
    (subProduct) => subProduct.subCategoryId === subCategoryId
  );

  console.log("subProductArray", subProductArray);
  return (
    <>
      <h3>Select Sub-Products </h3>
      {subProductArray?.map((subProduct) => (
        <div key={subProduct.subProductId}>{subProduct.subProductName}</div>
      ))}
      <button>+ ADD SUB-PRODUCT</button>
    </>
  );
}
