import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Basket from "./pages/Basket/Basket";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSum } from "./redux/itemSlice";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/basket" element={<Basket />} />
            </Routes>
        </div>
    );
}

export default App;
