
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom"
import Home from "./Pages/Home"
import NewestUpdate from "./Pages/NewestUpdate"
import AboutUs from "./Pages/AboutUs";
import Projects from "./Pages/Projects";
import ContactUs from "./Pages/ContactUs";
import "./App.css"

function App() {
    return (
        <div className="OverAll">
            <HashRouter basename='/'>
                <div>
                    <Header />
                </div>
                <Routes>
                    <Route path='/NewestUpdate' element={<NewestUpdate />}></Route>
                    <Route path='/AboutUs' element={<AboutUs />}></Route>
                    <Route path='/Projects' element={<Projects />}></Route>
                    <Route path='/ContactUs' element={<ContactUs />}></Route>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App;