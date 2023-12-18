import "./styles/App.css";
import { ProductList } from "./component/ProductList";
import { useState } from "react";
import { DoneModal } from "./component/DoneModal";
import { MyStoreContextProvider } from "./context/MyStore";

function App() {
  const [onDoneState, setOnDoneState] = useState(false);

  return (
    <div>
      <MyStoreContextProvider>
        <div>
          <h3>Products</h3>
          <button onClick={() => setOnDoneState(true)}>Done</button>
          <ProductList />
          <button>+ ADD PRODUCT</button>
        </div>
        {onDoneState && <DoneModal handleCloseModal={setOnDoneState} />}
      </MyStoreContextProvider>
    </div>
  );
}

export default App;
