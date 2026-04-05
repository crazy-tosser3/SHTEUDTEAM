'use client'
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const [themeValue, setThemeValue] = useState("dark") as any;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
        setMounted(true);
        const savedTheme = Cookies.get('theme');
        setThemeValue(savedTheme);
        savedTheme && applyTheme(savedTheme);
    }, []);

    const applyTheme = (current: string) => {
            document.documentElement.setAttribute('data-theme', current);
    };

    const setTheme = () => {
        const nextTheme = themeValue === "dark" ? "light" : "dark";
        setThemeValue(nextTheme);
        Cookies.set('theme', nextTheme, { expires: 365 });
        applyTheme(nextTheme)

        document.documentElement.setAttribute('data-theme', nextTheme);
    }

  return (
    <button onClick={setTheme}>
      {themeValue === "dark" ? <Moon /> : <Sun />}
    </button>
  )
}

export default ThemeSwitch