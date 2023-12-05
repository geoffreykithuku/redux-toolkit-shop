import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  const { modalOpen } = useSelector((state) => state.modal);
  
  return (
    <div className="w-full justify-center mx-auto bg-[#f7f7f7] min-h-screen">
      <Header />
      {modalOpen && <Modal />}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
