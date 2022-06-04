import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectAdminLogin } from "../stores/adminLogin";
import { ToastList } from "./components/ToastList";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";

export const Home = () => {
  const { decodedJwt } = useSelector(selectAdminLogin);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "ADMIN - we.wantToSleep()";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      {decodedJwt == null ? <Login /> : <Main />}
      <ToastList />
    </>
  );
};
