import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Lazy } from "./components/Lazy";
import { useTheme } from "./hooks/useTheme";
import { Home } from "./pages/Home";
import { Imprint } from "./pages/Imprint";
import { PrivacyStatement } from "./pages/PrivacyStatement";
import { Footer } from "./sections/Footer";

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
