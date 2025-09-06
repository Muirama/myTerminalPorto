import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "MyPortoTerminal 💻",
    description: "Un portfolio web sous forme de terminal.",
    tech: ["React", "Tailwind CSS", "Vite"],
    repo: "https://github.com/Muirama/myTerminalPorto",
    lien: "https://muirama-terminal-porto.netlify.app",
  },
  {
    title: "Gascom Mada 🎮",
    description:
      "Un exemple de page web pour E_sport et gaming ( en cours d'amélioration).",
    tech: ["React", "Tailwind CSS", "Vite"],
    repo: "https://github.com/Muirama/Gascom",
    lien: "https://gascomtest.netlify.app/",
  },
  {
    title: "Alarme et Réveil ⏰",
    description:
      "Application mobile de réveil et alarme que j'ai crée pour notre église, durée de son limité (1 min) et sans répétition.",
    tech: ["Flutter", "Dart"],
    repo: "https://github.com/Muirama/alarmFiangonana",
  },
  {
    title: "AgriMétéo 🌱",
    description:
      "Application mobile pour les agriculteurs pour des prévisions météorologiques et des conseils agricoles adapter en fonction de la ces prévisions.",
    tech: ["React Native", "Expo", "SpringBoot", "API Météo"],
    repo: "https://github.com/Muirama/agriMeteo",
  },
  {
    title: "Pong 🎮",
    description:
      "Petit jeu de pong où l'on affronte un IA. Mon tout premier jeu!!!",
    tech: ["C++", "SFML"],
    repo: "https://github.com/Muirama/pong",
  },
  {
    title: "BuyBit 🛒",
    description:
      "Application desktop pour la gestion des achats, ventes et stocks.",
    tech: ["Java"],
    repo: "https://github.com/Muirama/gestionAchat",
  },
  {
    title: "Pokédex 📱",
    description: "Application mobile pokédex pour pokémon !",
    tech: ["React Native", "Expo", "API pokémon"],
    repo: "https://github.com/Muirama/Pokedex",
  },
  {
    title: "BroCode 🤝",
    description: "Application mobile qui regroupe les règles entre potes !",
    tech: ["Flutter", "Dart"],
  },
  {
    title: "FacebookCLone",
    description: "Site web comme facebook ",
    tech: ["PHP , Laravel"],
    repo: "https://github.com/Muirama/fb_clone",
  },
  {
    title: "Ecommerce 📱",
    description: "Application mobile pour les e_commerce ",
    tech: ["React Native", "Expo", "MySQL"],
    repo: "https://github.com/Muirama/Ecommerce",
  },
];

export default function Projects() {
  return (
    <div>
      <ul className="space-y-6 font-mono text-green-300">
        {projects.map(({ title, description, tech, repo, lien }, idx) => (
          <li
            key={idx}
            className="bg-green-900 p-4 rounded-md border border-green-600"
          >
            <h3 className="text-green-400 font-bold">{title}</h3>
            <p className="italic my-1">{description}</p>
            <p>
              <strong>Technologies :</strong> {tech.join(", ")}
            </p>
            <p className="mt-2">
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 underline mr-4 flex items-center gap-1"
                >
                  <FiGithub />
                  Code source
                </a>
              )}
              {lien && (
                <a
                  href={lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 underline mr-4 flex items-center gap-1"
                >
                  <FiExternalLink />
                  Voir
                </a>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
