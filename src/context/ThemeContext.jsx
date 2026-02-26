"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false);

  // Load saved theme on initial mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("theme");
    const nextTheme = stored === "dark" ? "dark" : "light";

    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setIsMounted(true);
  }, []);

  // Apply theme changes to <html>
  useEffect(() => {
    if (typeof window === "undefined" || !isMounted) return;

    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, isMounted]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

