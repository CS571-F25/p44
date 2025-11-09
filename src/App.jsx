import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'


function App() {

  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<AboutMe/>}></Route>
    </Routes>
  </HashRouter>

}

export default App
