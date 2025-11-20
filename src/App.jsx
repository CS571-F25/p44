import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import GameScreen from "./pages/GameScreen";
import DevLog from "./pages/DevLog"; // new page
import MainNav from "./components/MainNav"; // new navbar
                                     
function App() {
  return (
    <HashRouter>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/devlog" element={<DevLog />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
