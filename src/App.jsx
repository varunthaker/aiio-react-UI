import "./styles/App.css";
import { ProductList } from "./component/ProductList";
import { useState } from "react";
import { DoneModal } from "./component/DoneModal";
import { MyStoreContextProvider } from "./context/MyStore";
import "./styles/products.css";

function App() {
  const [onDoneState, setOnDoneState] = useState(false);

  return (
    <MyStoreContextProvider>
      <main>
        <div className="headerContainer">
          <h3>Products</h3>
          <button className="doneButton" onClick={() => setOnDoneState(true)}>
            Done
          </button>
        </div>
        <ProductList />
        <button>+ ADD PRODUCT</button>
      </main>
      <div>
        {onDoneState && <DoneModal handleCloseModal={setOnDoneState} />}
      </div>
    </MyStoreContextProvider>
  );
}

export default App;
