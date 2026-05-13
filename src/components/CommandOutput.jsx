export default function CommandOutput({ children, isError }) {
  return (
    <div
      className={`whitespace-pre-wrap mb-3 cmd-output-enter ${
        isError ? "text-red-400" : "text-gray-300"
      }`}
      role={isError ? "alert" : "article"}
    >
      {children}
    </div>
  );
}
