import HijoApp from "./HijoApp";
import { ProductProvider } from "./context/productContext";
function App() {
  return (
    <ProductProvider>
      <div>
        <h1> Uso de useContext</h1>
        <HijoApp />
      </div>
    </ProductProvider>
  );
}

export default App;
