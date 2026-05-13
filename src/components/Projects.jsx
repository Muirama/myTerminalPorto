import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useLang } from "../hooks/useLang.js";
import t from "../i18n.js";

const projects = [
  {
    title: "MyPortoTerminal ",
    description: "Un portfolio web sous forme de terminal.",
    tech: ["React", "Tailwind CSS"],
    repo: "https://github.com/Muirama/myTerminalPorto",
    lien: "https://muirama-terminal-porto.netlify.app",
  },
  {
    title: "MyHub ",
    description: "Un site web qui me sert à la fois de hub et portfolio aussi.",
    tech: ["React", "Tailwind CSS"],
    repo: "https://github.com/Muirama/MyHub",
    lien: "https://muiramahub.netlify.app/",
  },
  {
    title: "Gascom",
    description: "Page web pour E-sport et gaming.",
    tech: ["React", "MySQL", "Express js", "Node js"],
    repo: "https://github.com/Muirama/memoire",
    lien: "https://gascomesport.netlify.app/",
  },
  {
    title: "Ekar Soavy",
    description: "Site web pour faciliter la gestion de notre église.",
    tech: ["React", "PostgreSQL", "Express js", "Node js", "Render", "Neon"],
    repo: "https://github.com/Muirama/fiangonana",
    lien: "https://ekarsoavy.netlify.app/",
  },
  {
    title: "Alarme et Réveil",
    description: "Application mobile de réveil pour notre église.",
    tech: ["Flutter", "Dart"],
    repo: "https://github.com/Muirama/alarmFiangonana",
  },
  {
    title: "AgriMétéo",
    description: "App mobile météo et conseils agricoles.",
    tech: ["React Native", "Expo", "Spring Boot", "API Météo"],
    repo: "https://github.com/Muirama/agriMeteo",
  },
  {
    title: "Pong",
    description: "Jeu de pong contre une IA — mon premier jeu !",
    tech: ["C++", "SFML"],
    repo: "https://github.com/Muirama/pong",
  },
  {
    title: "BuyBit",
    description: "Application desktop de gestion achats/ventes/stocks.",
    tech: ["Java"],
    repo: "https://github.com/Muirama/gestionAchat",
  },
  {
    title: "Pokédex",
    description: "Application mobile pokédex.",
    tech: ["React Native", "Expo", "API Pokémon"],
    repo: "https://github.com/Muirama/Pokedex",
  },
  {
    title: "BroCode",
    description: "App mobile qui regroupe les règles entre potes.",
    tech: ["Flutter", "Dart"],
  },
  {
    title: "Facebook Clone",
    description: "Clone de Facebook en PHP/Laravel.",
    tech: ["PHP", "Laravel"],
    repo: "https://github.com/Muirama/fb_clone",
  },
  {
    title: "Ecommerce",
    description: "Application mobile e-commerce.",
    tech: ["React Native", "Expo", "MySQL"],
    repo: "https://github.com/Muirama/Ecommerce",
  },
];

export default function Projects() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <div className="projects-list">
      {projects.map(({ title, description, tech, repo, lien }, i) => (
        <div key={i} className="project-card">
          <p className="project-title">{title}</p>
          <p className="project-desc">{description}</p>
          <p className="project-tech">
            {tr.projects_tech} <span>{tech.join(", ")}</span>
          </p>
          {(repo || lien) && (
            <div className="project-links">
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiGithub size={13} /> {tr.projects_code}
                </a>
              )}
              {lien && (
                <a
                  href={lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiExternalLink size={13} /> {tr.projects_demo}
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
