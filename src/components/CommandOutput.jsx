export default function CommandOutput({ children, isError }) {
    return (
      <pre className={`whitespace-pre-wrap mb-2 ${isError ? 'text-error' : 'text-text'}`}>
        {children}
      </pre>
    )
  }
  