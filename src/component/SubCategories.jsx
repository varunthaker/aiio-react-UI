import { useEffect, useState } from "react";
import SubCategoriesData from "../data/subcategories.json";
import { SubProduct } from "./SubProduct";
console.log(SubCategoriesData.subcatergories);

export function SubCategories({ productId }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [subCatagoryState, setSubCatagoryState] = useState("");

  console.log(productId);

  const subCatagoryArray = SubCategoriesData.subcatergories?.filter(
    (subCatagory) => subCatagory.productId === productId
  );

  function handleSearchQuery(e) {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  }

  const filteredsubCatagoryArray = subCatagoryArray?.filter(
    (filteredsubCatagory) =>
      filteredsubCatagory.subCategoryName
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  //   console.log(filteredsubCatagoryArray);
  function handlecheckBox(subCatId) {
    setSubCatagoryState(subCatId);
  }

  return (
    <>
      <h3>Select Subcategories </h3>
      <input type="text" onChange={(e) => handleSearchQuery(e)} />
      {filteredsubCatagoryArray?.map((subCatagory) => (
        <div key={subCatagory.subCategoryId}>
          <label>{subCatagory.subCategoryName}</label>
          <input
            type="checkbox"
            id={subCatagory.productId}
            name={subCatagory.subCategoryName}
            onChange={() => handlecheckBox(subCatagory.productId)}
          />
        </div>
      ))}

      {subCatagoryState && <SubProduct subCategoryId={subCatagoryState} />}
      <button>+ ADD SUBCATEGORY</button>
    </>
  );
}
