import React from "react";
import "./App.css";
import {Home} from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import {PrivacyStatement} from "./pages/PrivacyStatement";
import {Imprint} from "./pages/Imprint";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="datenschutz" element={<PrivacyStatement/>}/>
                <Route path="impressum" element={<Imprint/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
