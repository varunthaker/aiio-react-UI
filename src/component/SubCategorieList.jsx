import { useState, useContext } from "react";
import { SubProduct } from "./SubProductList";
import { MyStoreContext } from "../context/MyStore";
import "../styles/subcatagories.css";

export function SubCategories({ productId }) {
  const { subCatagories, subCatagoryID, setSubCatagoryID } =
    useContext(MyStoreContext);
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

  return (
    <div className="subCatagoryContainer">
      <div className="header">
        <h4>Select Subcategories </h4>
      </div>

      <div className="subCatagorySubContainer">
        <input
          className="searchQueryInput"
          placeholder="Search"
          type="text"
          onChange={(e) => handleSearchQuery(e)}
        />
        <div className="subCatagoryList">
          {filteredsubCatagoryArray?.map((subCatagory) => (
            <div className="subCatagory" key={subCatagory.subCategoryId}>
              <label>{subCatagory.subCategoryName}</label>
              <input
                className="subCatagoryInput"
                type="checkbox"
                id={subCatagory.productId}
                name={subCatagory.subCategoryName}
                onChange={() => setSubCatagoryID(subCatagory.subCategoryId)}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="addCatagoryButton">+ ADD SUBCATEGORY</button>
      {subCatagoryID && <SubProduct subCategoryId={subCatagoryID} />}
    </div>
  );
}
