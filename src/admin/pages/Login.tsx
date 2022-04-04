import { ChangeEvent, FormEvent, useState } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { loginAdmin } from "../../network/adminApi";
import { Jwt } from "../../network/jwt";
import styles from "./Login.module.scss";

interface LoginProps {
  onLogin(jwt: Jwt): void;
}

export const Login = ({ onLogin }: LoginProps) => {
  const [rememberUsername, setRememberUsername] = useLocalStorage<boolean>(
    "admin.rememberUsername",
    true
  );
  const [username, setUsername] = useLocalStorage<string>(
    "admin.cacheUsername",
    ""
  );
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function changeUsername(e: ChangeEvent<HTMLInputElement>) {
    const username = e.target.value;
    setUsername(username, { remember: rememberUsername });
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
    setUsername((v) => v, { remember });
  }

  function submit(e: FormEvent) {
    e.preventDefault();

    if (username === "") {
      setErrorMessage("Error: Username missing");
    } else if (password === "") {
      setErrorMessage("Error: Password missing");
    } else {
      attemptLogin();
    }
  }

  async function attemptLogin() {
    try {
      const jwt = await loginAdmin({ username, password });
      onLogin(jwt);
    } catch (e: any) {
      console.log(e);
      if (e instanceof Array) {
        setErrorMessage(
          e.map((e) => ("message" in e ? e.message : e)).join("; ")
        );
      } else {
        setErrorMessage("message" in e ? e.message : e);
      }
    }
  }

  return (
    <div className={styles.outer}>
      <h1 className={styles.heading}>ADMIN area</h1>

      <form className={styles.loginForm} onSubmit={submit}>
        Username:
        <input
          autoFocus={username == ""}
          autoCapitalize="off"
          spellCheck={false}
          type="text"
          className={styles.inputField}
          value={username}
          onChange={changeUsername}
        />
        Password:
        <input
          autoFocus={username != ""}
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
