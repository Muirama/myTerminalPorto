import { useState, useEffect, useRef } from 'react'

export default function CommandInput({ onSubmit }) {
  const [input, setInput] = useState('')
  const historyIndexRef = useRef(null)
  const [localHistory, setLocalHistory] = useState([])
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleKeyDown = e => {
    // Submit
    if (e.key === 'Enter') {
      e.preventDefault()
      if (input.trim() === '') return
      onSubmit(input.trim())
      setLocalHistory(h => [input.trim(), ...h].slice(0, 50))
      historyIndexRef.current = null
      setInput('')
      return
    }

    // History navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const i = historyIndexRef.current
      const next = i === null ? 0 : Math.min(i + 1, localHistory.length - 1)
      const value = localHistory[next] ?? ''
      setInput(value)
      historyIndexRef.current = next
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const i = historyIndexRef.current
      if (i === null) return
      const next = i - 1
      const value = next >= 0 ? localHistory[next] : ''
      setInput(value)
      historyIndexRef.current = next >= 0 ? next : null
      return
    }

    // Ctrl+L clears (common terminal shortcut)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') {
      e.preventDefault()
      setInput('')
      return
    }
  }

  return (
    <div className="flex items-center text-accent">
      <span className="mr-2" aria-hidden>{'>'}</span>
      <input
        id="command-input"
        ref={inputRef}
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        spellCheck="false"
        aria-label="Entrez une commande"
        className="bg-transparent border-b border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent flex-1"
        placeholder="Tapez 'help' pour commencer..."
      />
      <span className="blinking-cursor" aria-hidden />
    </div>
  )
}
