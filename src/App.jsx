import LangProvider  from './provider/LangProvider.jsx'
import Terminal from './components/Terminal.jsx'

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen w-full flex items-center justify-center bg-black p-0 m-0">
        <Terminal />
      </div>
    </LangProvider>
  )
}