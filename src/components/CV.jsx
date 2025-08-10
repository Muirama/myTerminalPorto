export default function CV() {
  return (
    <div>
      <p>📄 Mon CV est disponible en téléchargement :</p>
      <a
        href="/cv.pdf"
        download="Mandresy_Michel_Ramandimbinirina_CV.pdf"
        className="text-green-400 underline hover:text-green-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Télécharger le CV (PDF)
      </a>
    </div>
  );
}
