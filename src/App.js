import Home from "./Home";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;