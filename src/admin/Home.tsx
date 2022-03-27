import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
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

  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    "admin.accessToken",
    null
  );
  const [username, setUsername] = useLocalStorage<string | null>(
    "admin.username",
    null
  );

  function onLogin(username: string, accessToken: string) {
    setAccessToken(accessToken);
    setUsername(username);
  }

  function onLogout() {
    setAccessToken(null);
    setUsername(null);
  }

  if (accessToken != null && username != null) {
    return (
      <Main username={username} accessToken={accessToken} onLogout={onLogout} />
    );
  } else {
    return <Login onLogin={onLogin} />;
  }
};
