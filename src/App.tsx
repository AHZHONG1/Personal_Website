
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom"
import Home from "./Pages/Home"
import NewestUpdate from "./Pages/NewestUpdate"
import AboutUs from "./Pages/AboutUs";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import './Pages/All.css'

function App() {
    return (
        <div className="OverAll">
            <HashRouter basename='/'>
                <Routes>
                    <Route path='/NewestUpdate' element={<NewestUpdate />}></Route>
                    <Route path='/AboutUs' element={<AboutUs />}></Route>
                    <Route path='/Projects' element={<Projects />}></Route>
                    <Route path='/Skills' element={<Skills />}></Route>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App;