import { useState, useContext } from "react";
import { MyStoreContext } from "../context/MyStore";

export function SubProduct({ subCategoryId }) {
  const { subProducts, setSubProductID } = useContext(MyStoreContext);

  const [searchQuery, setSearchQuery] = useState("");

  const subProductArray = subProducts?.filter(
    (subProduct) => subProduct.subCategoryId === subCategoryId
  );

  const filteredSubProductArray = subProductArray?.filter(
    (filteredSubProduct) =>
      filteredSubProduct.subProductName
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  function handleSearchQuery(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div>
      <h3>Select Sub-Products </h3>
      <input type="text" onChange={(e) => handleSearchQuery(e)} />
      {filteredSubProductArray?.map((subProduct) => (
        <div key={subProduct.subProductId}>
          <label>{subProduct.subProductName}</label>
          <input
            type="checkbox"
            id={subProduct.subProductId}
            name={subProduct.subProductName}
            onChange={() => setSubProductID(subProduct.productId)}
          />
        </div>
      ))}
      <button>+ ADD SUB-PRODUCT</button>
    </div>
  );
}
