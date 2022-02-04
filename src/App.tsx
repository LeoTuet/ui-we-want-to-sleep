import React from 'react';
import './App.css';
import {Home} from './pages/Home';
import {Routes, Route} from "react-router-dom";
import PrivacyStatement from "./pages/PrivacyStatement";
import Impressum from "./pages/Impressum";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="datenschutz" element={<PrivacyStatement />}/>
                <Route path="impressum" element={<Impressum />}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
