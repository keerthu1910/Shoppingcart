import { Cartdata } from "./Components/Cart/Cartdata";
import { Productpage } from "./Components/Product/Productpage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Productpage />}></Route>
        <Route path="/cart" element={<Cartdata />}></Route>
      </Routes>
    </div>
  );
}

export default App;
