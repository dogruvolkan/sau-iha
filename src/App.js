import "./Assets/Styles/style.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Home from "./pages/Home";
import Management from "./pages/Management";
import Galery from "./pages/Galery";
import Team1 from "./pages/Team1";
import Team2 from "./pages/Team2";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="management" element={<Management />} />
        <Route path="galery" element={<Galery />}></Route>
        <Route path="team1" element={<Team1 />} />
        <Route path="team2" element={<Team2 />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
