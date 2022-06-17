import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Lazy } from "./components/Lazy";
import { useTheme } from "./hooks/useTheme";
import { Home } from "./pages/Home";
import { Footer } from "./sections/Footer";

function App() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  useTheme();

  return (
    <div className="App">
      <Routes>
        <Route path="/:token" element={<Home />} />
        <Route
          path="sources"
          element={
            <Lazy
              init={() => import("./pages/Sources").then((mod) => mod.Sources)}
            />
          }
        />
        <Route
          path="privacy"
          element={
            <Lazy
              init={() =>
                import("./pages/PrivacyStatement").then(
                  (mod) => mod.PrivacyStatement
                )
              }
            />
          }
        />
        <Route
          path="imprint"
          element={
            <Lazy
              init={() => import("./pages/Imprint").then((mod) => mod.Imprint)}
            />
          }
        />
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
