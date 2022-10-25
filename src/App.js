import "./Assets/Styles/style.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Home from "./pages/Home";
import Management from "./pages/Management";
import Galery from "./pages/Galery";
import Sancaktar from "./pages/Sancaktar";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="management" element={<Management />} />
        <Route path="galery" element={<Galery />}></Route>
        <Route path="sancaktar" element={<Sancaktar />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
