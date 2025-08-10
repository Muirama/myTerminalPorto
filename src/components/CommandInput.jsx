import { useState, useEffect, useRef } from 'react'

export default function CommandInput({ onSubmit }) {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (input.trim() === '') return
      onSubmit(input.trim())
      setInput('')
    }
  }

  return (
    <div className="flex items-center text-accent">
      <span className="mr-2">{'>'}</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        spellCheck="false"
        className="bg-transparent border-b border-accent focus:outline-none flex-1"
        placeholder="Tapez 'help' pour commencer..."
      />
      <span className="blinking-cursor"></span>
    </div>
  )
}
