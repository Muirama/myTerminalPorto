import { useState } from "react";
import LangContext from "../context/langContext";

export default function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem("terminal_lang") || "fr";
    } catch {
      return "fr";
    }
  });

  function setLang(l) {
    setLangState(l);
    try {
      localStorage.setItem("terminal_lang", l);
    } catch {
      /* noop */
    }
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
