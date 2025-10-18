import { useState } from "react";
import CommandInput from "./CommandInput.jsx";
import CommandOutput from "./CommandOutput.jsx";
import commands from "../commands.jsx";

export default function Terminal() {
  const [history, setHistory] = useState([]);

  function handleCommand(input) {
    const [cmd, ...args] = input.toLowerCase().split(" ");
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    const CommandComponent = commands[cmd];
    if (!CommandComponent) {
      setHistory((h) => [
        ...h,
        {
          input,
          output: (
            <CommandOutput isError>
              Erreur : commande "{cmd}" inconnue. Tapez 'help'.
            </CommandOutput>
          ),
        },
      ]);
      return;
    }
    // Render the command as a React component. Pass args as a prop so
    // components that need parameters can access them via props.args.
    setHistory((h) => [
      ...h,
      {
        input,
        output: (
          <CommandOutput>
            <CommandComponent args={args} />
          </CommandOutput>
        ),
      },
    ]);
  }

  return (
    <section
      className="w-full h-screen max-w-4xl mx-auto flex flex-col bg-background rounded-md shadow-lg"
      role="region"
      aria-label="Terminal - portfolio"
      tabIndex={0}
      onClick={() => document.getElementById('command-input')?.focus()}
    >
      {/* --- Header --- */}
      <div className="bg-gray-800 px-4 py-2 rounded-t-md flex items-center justify-between">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <span className="text-gray-300 text-xs">Terminal — Portfolio</span>
      </div>

      {/* --- Zone scrollable --- */}
      <div
        className="flex-1 overflow-y-auto bg-black p-4 text-green-400 font-mono text-sm"
        role="log"
        aria-live="polite"
        aria-atomic="false"
      >
        {history.map(({ input, output }, index) => (
          <div key={index}>
            <pre className="text-accent">{`> ${input}`}</pre>
            {output}
          </div>
        ))}
      </div>

      {/* --- Input toujours visible --- */}
      <div className="bg-black p-4 border-t border-gray-700">
        <CommandInput onSubmit={handleCommand} />
      </div>
    </section>
  );
}
