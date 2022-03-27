import { Home } from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { PrivacyStatement } from "./pages/PrivacyStatement";
import { Imprint } from "./pages/Imprint";
import { Footer } from "./sections/Footer";
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import { Lazy } from "./components/Lazy";

function App() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  useTheme();

  return (
    <div className="App">
      <Routes>
        <Route path="/:token" element={<Home />} />
        <Route path="datenschutz" element={<PrivacyStatement />} />
        <Route path="impressum" element={<Imprint />} />
        <Route
          path="admin/*"
          element={
            <Lazy init={() => import("./admin/Home").then((mod) => mod.Home)} />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
