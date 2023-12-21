import "../styles/products.css";
export function AddSubProduct({ subCategoryId, setOpenAddSubProductModal }) {
  async function handleAddSubProduct(event) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);

    const response = await fetch("http://localhost:8000/subproducts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      await response.json();
      setOpenAddSubProductModal(false);
    } else {
      console.error(`Error: ${response}`);
    }
  }
  return (
    <div className="productForm">
      <h3>Add Sub-Product</h3>
      <form onSubmit={(e) => handleAddSubProduct(e)}>
        <label htmlFor="subProductName">Sub product Name:</label>
        <input type="text" name="subProductName" required />
        <br />
        <label htmlFor="subCategoryId">Sub Category Id:</label>
        <input type="text" name="subCategoryId" defaultValue={subCategoryId} />
        <div className="buttonsDiv">
          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => setOpenAddSubProductModal(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
