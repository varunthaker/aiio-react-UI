export function DoneModal({ handleCloseModal }) {
  return (
    <>
      <p>Products </p>
      <p>Sub Categories</p>
      <p>Sub Products</p>
      <button onClick={() => handleCloseModal(false)}>Save</button>
    </>
  );
}
