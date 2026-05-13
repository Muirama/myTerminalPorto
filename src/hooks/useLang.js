import { useContext } from "react";
import LangContext from "../context/langContext.js";

export function useLang() {
  return useContext(LangContext);
}

export default useLang;
