export default function About() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <img
        src="/images/profile.jpg"
        alt="Photo de profil"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #00ff00",
        }}
      />
      <div>
        <h1
          style={{
            color: "#00ff00",
            marginBottom: "0.3rem",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Mandresy Michel RAMANDIMBINIRINA
        </h1>
        <h2
          style={{
            color: "#00ff00",
            marginBottom: "0.5rem",
            fontFamily: "monospace",
          }}
        >
          Développeur Junior
        </h2>
        <p>
          J’aime créer des applications modernes, performantes et accessibles,
          avec un code propre et maintenable.
        </p>
        <p>
          Étudiant en <strong>3ᵉ année d’informatique</strong> à l’
          <strong>École Supérieure des Technologies et de l’Information</strong>
          , je suis à la recherche d’une alternance, d’un stage alterné ou d’un
          poste en télétravail.
        </p>
        <p>
          Passionné par le développement mobile, la création de jeux et le web,
          je suis également ouvert à toute opportunité me permettant de
          renforcer mes compétences et de contribuer à des projets concrets.
        </p>
        <p>
          Sérieux, curieux et motivé, je suis prêt à relever de nouveaux défis.
        </p>
      </div>
    </div>
  );
}
