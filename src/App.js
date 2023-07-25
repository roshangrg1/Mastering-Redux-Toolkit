import "./App.css";
import Product from "./component/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./component/Card";
import Navbar from "./component/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Product />} />
          <Route path="/cart" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
