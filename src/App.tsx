import { Home } from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { PrivacyStatement } from "./pages/PrivacyStatement";
import { Imprint } from "./pages/Imprint";
import { Footer } from "./sections/Footer";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  // For Theme Sync
  useEffect(() => {
    let theme = "light";
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "dark") {
        theme = "dark";
      }
    } else if (!window.matchMedia) {
      return;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
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
