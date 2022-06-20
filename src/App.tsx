import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

import { Lazy } from "./components/Lazy";
import { useTheme } from "./hooks/useTheme";
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";
import { Footer } from "./sections/Footer";
import { fetchRunningBallot } from "./stores/ballot";
import { fetchTokenStatus } from "./stores/token";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  useTheme();

  useEffect(() => {
    // There is an issue with typing the dispatch correctly.
    // Here is a link on how it should be: https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
    // Feel free to fix it - I wasn't able to
    // totalHoursWasted: 1
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(fetchRunningBallot()).then(() => dispatch(fetchTokenStatus()));
  }, [dispatch]);

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
        <Route path="result" element={<Result />} />
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
