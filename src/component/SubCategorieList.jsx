import { useState, useContext } from "react";
import { SubProduct } from "./SubProductList";
import { MyStoreContext } from "../context/MyStore";

export function SubCategories({ productId }) {
  const { subCatagories } = useContext(MyStoreContext);
  const [subCatagoryId, setSubCatagoryId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const subCatagoryArray = subCatagories?.filter(
    (subCatagory) => subCatagory.productId === productId
  );

  const filteredsubCatagoryArray = subCatagoryArray?.filter(
    (filteredsubCatagory) =>
      filteredsubCatagory.subCategoryName
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  function handleSearchQuery(e) {
    setSearchQuery(e.target.value);
  }

  function handlecheckBox(subCatId) {
    setSubCatagoryId(subCatId);
  }

  return (
    <>
      <div>
        <h3>Select Subcategories </h3>
        <input type="text" onChange={(e) => handleSearchQuery(e)} />
        {filteredsubCatagoryArray?.map((subCatagory) => (
          <div key={subCatagory.subCategoryId}>
            <label>{subCatagory.subCategoryName}</label>
            <input
              type="checkbox"
              id={subCatagory.productId}
              name={subCatagory.subCategoryName}
              onChange={() => handlecheckBox(subCatagory.subCategoryId)}
            />
          </div>
        ))}
        <button>+ ADD SUBCATEGORY</button>
      </div>

      {subCatagoryId && <SubProduct subCategoryId={subCatagoryId} />}
    </>
  );
}
