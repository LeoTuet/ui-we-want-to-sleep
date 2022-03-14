import { Home } from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { PrivacyStatement } from "./pages/PrivacyStatement";
import { Imprint } from "./pages/Imprint";
import { Footer } from "./sections/Footer";
import { useEffect } from "react";
import { Theme } from "./models";

function App() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  // For Theme Sync
  useEffect(() => {
    let theme: Theme = "light"
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme") as Theme
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      theme = "light"
    }
      document.documentElement.setAttribute("data-theme", theme);
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/:token" element={<Home />} />
        <Route path="datenschutz" element={<PrivacyStatement />} />
        <Route path="impressum" element={<Imprint />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
