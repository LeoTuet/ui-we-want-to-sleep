import { Home } from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { PrivacyStatement } from "./pages/PrivacyStatement";
import { Imprint } from "./pages/Imprint";
import { Sources } from "./pages/Sources";
import { Footer } from "./sections/Footer";
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  useTheme();

  return (
    <div className="App">
      <Routes>
        <Route path="/:token" element={<Home />} />
        <Route path="privacy-statement" element={<PrivacyStatement />} />
        <Route path="imprint" element={<Imprint />} />
        <Route path="sources" element={<Sources />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
