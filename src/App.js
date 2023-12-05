import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="w-full justify-center mx-auto bg-[#f7f7f7]">
      <Header />
      <Modal />
      <Routes>
        <Route path="/" element={<Home />} />
      
          <Route path="/Cart" element={<Cart />} />
        
      </Routes>
    </div>
  );
}

export default App;
