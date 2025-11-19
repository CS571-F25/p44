import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import GameScreen from './pages/GameScreen'


function App() {

  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<AboutMe/>}></Route>
      <Route path="/game" element={<GameScreen/>}></Route>
    </Routes>
  </HashRouter>

}

export default App
