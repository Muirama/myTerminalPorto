export function getLang() {
  try {
    return localStorage.getItem("terminal_lang") || "fr";
  } catch {
    return "fr";
  }
}

export function setLang(lang) {
  try {
    localStorage.setItem("terminal_lang", lang);
  } catch {
    /* noop */
  }
}
