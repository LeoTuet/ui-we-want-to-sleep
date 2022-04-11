import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Jwt, useJwt } from "../network/jwt";
import { actions } from "../stores/toasts";
import { ToastList } from "./components/ToastList";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "ADMIN - we.wantToSleep()";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const [jwt, setJwt] = useJwt("admin.accessToken");

  function onLogin(jwt: Jwt) {
    setJwt(jwt);
  }

  function onLogout() {
    setJwt(null);
    dispatch(
      actions.addToast({
        kind: "info",
        timeout_ms: 4000,
        children: "You were logged out.",
      })
    );
  }

  return (
    <>
      {jwt == null ? (
        <Login onLogin={onLogin} />
      ) : (
        <Main jwt={jwt} onLogout={onLogout} />
      )}
      <ToastList />
    </>
  );
};
