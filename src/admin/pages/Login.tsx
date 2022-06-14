import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { login } from "../../stores/adminLogin";
import styles from "./Login.module.scss";

export const Login = () => {
  const dispatch = useDispatch();

  const [rememberUsername, setRememberUsername] = useLocalStorage<boolean>(
    "admin.rememberUsername",
    true
  );
  const [username, setUserName] = useLocalStorage<string>(
    "admin.cacheUsername",
    ""
  );
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function changeUsername(e: ChangeEvent<HTMLInputElement>) {
    const username = e.target.value;
    setUserName(username, { remember: rememberUsername });
    setErrorMessage("");
  }

  function changePassword(e: ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    setPassword(password);
    setErrorMessage("");
  }

  function changeRemember(e: ChangeEvent<HTMLInputElement>) {
    const remember = e.target.checked;
    setRememberUsername(remember);
    setUserName((v) => v, { remember });
  }

  function submit(e: FormEvent) {
    e.preventDefault();

    if (username === "") {
      setErrorMessage("Error: Username missing");
    } else if (password === "") {
      setErrorMessage("Error: Password missing");
    } else {
      handleLogin();
    }
  }

  // async function attemptLogin() {
  //   try {
  //     const jwt = await loginAdmin({ username, password });
  //     onLogin(jwt);
  //   } catch (e) {
  //     setErrorMessage((e as FetchError).message);
  //   }
  // }

  const handleLogin = useCallback(() => {
    dispatch(login({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={styles.outer}>
      <h1 className={styles.heading}>ADMIN area</h1>

      <form className={styles.loginForm} onSubmit={submit}>
        Username:
        <input
          autoCapitalize="off"
          spellCheck={false}
          type="text"
          className={styles.inputField}
          value={username}
          onChange={changeUsername}
        />
        Password:
        <input
          type="password"
          className={styles.inputField}
          onChange={changePassword}
        />
        <label>
          <input
            type="checkbox"
            checked={rememberUsername}
            onChange={changeRemember}
          />
          Remember username
        </label>
        <div className={styles.errorMessage}>{errorMessage}</div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
