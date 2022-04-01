import { useEffect } from "react";
import { Jwt, useJwt } from "../network/jwt";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";

export const Home = () => {
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
  }

  if (jwt != null) {
    return <Main jwt={jwt} onLogout={onLogout} />;
  } else {
    return <Login onLogin={onLogin} />;
  }
};
