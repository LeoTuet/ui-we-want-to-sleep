import React, {useCallback, useEffect, useState} from 'react';
import halfMoon from "../assets/half-moon.png"
import sheep from "../assets/sheep.png"

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    // Checks initial Theme
    if (document.documentElement.getAttribute("data-theme") == "dark") {
      console.log("setting")
      setIsDark(true)
      localStorage.setItem("theme", "dark")
    } else {
      setIsDark(false)
      localStorage.setItem("theme", "light")
    }
  }, [])

  const handleChangeTheme = useCallback(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }, [])

  return (
    <div onClick={handleChangeTheme}>
      {isDark && (<img src={halfMoon} alt={"Half Moon - Toggle Button for Light Mode"} width={"50"}/>)}
      {!isDark && (<img src={sheep} alt={"Sheep - Toggle Button for Dark Mode"} width={"50"}/>)}
    </div>
  );
};

export default ThemeToggle;
