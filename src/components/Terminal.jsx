import { useState, useRef, useEffect } from "react";
import CommandInput from "./CommandInput.jsx";
import commands from "../commands.jsx";
import Welcome from "./Welcome.jsx";
import {useLang} from "../hooks/useLang.js";
import t from "../i18n.js";

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [exited, setExited] = useState(false);
  const bottomRef = useRef(null);
  const { lang, setLang } = useLang();
  const tr = t[lang];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  function handleCommand(input) {
    const parts = input.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (cmd === "exit") {
      setHistory((h) => [
        ...h,
        {
          input,
          output: <p style={{ color: "var(--dim)" }}>{tr.terminal_end_msg}</p>,
          isError: false,
        },
      ]);
      setExited(true);
      return;
    }

    if (cmd === "lang") {
      const requested = args[0]?.toLowerCase();
      if (requested === "fr" || requested === "en") {
        setLang(requested);
        setHistory((h) => [
          ...h,
          {
            input,
            output: (
              <p className="lang-ok">
                {requested === "fr"
                  ? "🇫🇷 Interface en français activée."
                  : "🇬🇧 English interface activated."}
              </p>
            ),
          },
        ]);
      } else {
        const LangComponent = commands["lang"];
        setHistory((h) => [
          ...h,
          {
            input,
            output: <LangComponent args={args} />,
          },
        ]);
      }
      return;
    }

    const CommandComponent = commands[cmd];
    if (!CommandComponent) {
      setHistory((h) => [
        ...h,
        {
          input,
          output: (
            <span>
              Commande inconnue : "
              <span style={{ color: "var(--cyan)" }}>{cmd}</span>". Tapez{" "}
              <span style={{ color: "var(--cyan)" }}>help</span>.
            </span>
          ),
          isError: true,
        },
      ]);
      return;
    }

    setHistory((h) => [
      ...h,
      {
        input,
        output: <CommandComponent args={args} />,
        isError: false,
      },
    ]);
  }

  return (
    <div
      className="terminal-root"
      onClick={() =>
        !exited && document.getElementById("command-input")?.focus()
      }
    >
      {/* Barre de titre */}
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="terminal-dot dot-red" />
          <span className="terminal-dot dot-yellow" />
          <span className="terminal-dot dot-green" />
        </div>
        <span className="terminal-title">mandresy@portfolio ~ $</span>
        <span className="terminal-status">
          {exited ? tr.terminal_ended : tr.terminal_active}
        </span>
      </div>

      {/* Corps scrollable */}
      <div
        className="terminal-body"
        role="log"
        aria-live="polite"
        aria-atomic="false"
      >
        <Welcome />

        {history.map(({ input, output, isError }, i) => (
          <div key={i} className="cmd-entry">
            <div className="cmd-echo">&gt; {input}</div>
            <div className={`cmd-output${isError ? " is-error" : ""}`}>
              {output}
            </div>
          </div>
        ))}

        {exited && (
          <div className="session-ended-bar">{tr.terminal_end_sep}</div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="terminal-input-area">
        {exited ? (
          <p className="input-disabled">{tr.terminal_refresh}</p>
        ) : (
          <CommandInput onSubmit={handleCommand} />
        )}
      </div>
    </div>
  );
}
