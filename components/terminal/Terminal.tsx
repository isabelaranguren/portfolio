"use client";
import React, { useState, useRef, useEffect } from "react";
import { commands } from "@/lib/commands";
import "./terminal.css";

const Terminal = () => {
  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([""]);
  const [domain, setDomain] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  // Define your ASCII art banner
  const banner = `Hi! ʕ·͡ᴥ·ʔ `;
  useEffect(() => {
    const initialMessage = `Type 'help' to see a list of available commands.`;
    setDomain(window.location.hostname);

    const storedHistory = localStorage.getItem("cmdHistory");
    if (storedHistory) {
      setCmdHistory([
        banner,
        initialMessage,
        ...JSON.parse(storedHistory),
      ]);
    } else {
      setCmdHistory([banner, initialMessage, ""]); // Initialize with ASCII art and initial message.
    }

    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("cmdHistory", JSON.stringify(cmdHistory));
  }, [cmdHistory]);

  const prompt = domain ? `${domain}$@guest ~ %` : "loading...";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedInput = inputVal.trim();
    if (trimmedInput === "") {
      setInputVal("");
      return;
    }

    const [cmdName, ...args] = trimmedInput.split(" ");
    setCmdHistory((prev) => [...prev, `${prompt} ${trimmedInput}`]);

    if (commands[cmdName]) {
      const output = commands[cmdName].execute(args);

      if (output === null) {
        setCmdHistory([""]);
      } else if (typeof output === "string") {
        const outputLines = output.split("\n");
        setCmdHistory((prev) => [...prev, ...outputLines]);
      }
    } else {
      setCmdHistory((prev) => [...prev, `Command not found: ${trimmedInput}`]);
    }

    setInputVal("");
  };

  return (
    <div className="relative">
      <div className="terminal container mx-auto w-full sm:w-[80%] lg:w-[115%] max-w-none lg:-ml-12 lg:-mr-12">

        <div className="terminal-header">
          <div className="buttons">
            <span className="button close"></span>
            <span className="button minimize"></span>
            <span className="button maximize"></span>
          </div>
        </div>
        <div className="terminal-body" id="terminal-body">
          {cmdHistory.map((cmd, index) => (
            <div key={index} className="line">
              <span className="command">{cmd}</span>
            </div>
          ))}
          <div className="line">
            <span className="prompt">{prompt}</span>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                ref={inputRef}
                autoFocus
                style={{ paddingLeft: "10px" }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
