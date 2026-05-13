import { useState, useEffect, useRef } from "react";
import commands from "../commands.jsx";

const COMMAND_LIST = Object.keys(commands);

export default function CommandInput({ onSubmit }) {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const historyIndexRef = useRef(null);
  const [localHistory, setLocalHistory] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) {
      setSuggestion("");
      return;
    }
    const match = COMMAND_LIST.find(
      (c) => c.startsWith(trimmed) && c !== trimmed,
    );
    setSuggestion(match ? match.slice(trimmed.length) : "");
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!input.trim()) return;
      onSubmit(input.trim());
      setLocalHistory((h) => [input.trim(), ...h].slice(0, 50));
      historyIndexRef.current = null;
      setInput("");
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      if (suggestion) {
        setInput(input.trim() + suggestion);
        setSuggestion("");
      }
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = historyIndexRef.current;
      const next = i === null ? 0 : Math.min(i + 1, localHistory.length - 1);
      setInput(localHistory[next] ?? "");
      historyIndexRef.current = next;
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = historyIndexRef.current;
      if (i === null) return;
      const next = i - 1;
      setInput(next >= 0 ? localHistory[next] : "");
      historyIndexRef.current = next >= 0 ? next : null;
      return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "l") {
      e.preventDefault();
      setInput("");
      return;
    }
  };

  return (
    <div className="prompt-line">
      <span className="prompt-arrow" aria-hidden>
        &gt;
      </span>
      <div className="prompt-input-wrap">
        {suggestion && (
          <span className="prompt-ghost" aria-hidden>
            <span style={{ visibility: "hidden" }}>{input}</span>
            {suggestion}
          </span>
        )}
        <input
          id="command-input"
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-label="Entrez une commande"
          aria-autocomplete="list"
          className="prompt-input"
          placeholder="help…"
        />
      </div>
      <span className="blinking-cursor" aria-hidden />
    </div>
  );
}
