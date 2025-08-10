export default function Skills() {
  const skillCategories = {
    "Front-end": [
      { name: "React.js", level: 95 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "JavaScript ", level: 90 },
      { name: "Typescript ", level: 88 },
    ],
    "Back-end": [
      { name: "PHP", level: 85 },
      { name: "Node.js", level: 90 },
      { name: "Java", level: 80 },
    ],
    "Frameworks": [
      { name: "Laravel", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Express.js", level: 93 },
    ],
    "Mobile": [
      { name: "React Native", level: 95 },
      { name: "Flutter ", level: 80 },
    ],
    "Base de données": [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 70 },
    ],
    "Outils": [
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
    ],
    "Développement de jeux": [{ name: "Godot Engine", level: 50 }],
  };

  const getProgressBar = (level) => {
    const totalBars = 50;
    const filledBars = Math.round((level / 100) * totalBars);
    return "█".repeat(filledBars) + "-".repeat(totalBars - filledBars);
  };

  return (
    <div>
      <p className="mb-4 text-sm italic text-green-400">
        Voici une sélection des technologies, langages et outils que je maîtrise
        — la liste complète est plus longue !
      </p>

      {Object.entries(skillCategories).map(([category, skills], idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-green-300 font-bold mb-2">{category}</h3>
          <ul className="space-y-2 font-mono">
            {skills.map((skill, i) => (
              <li
                key={i}
                className="flex items-center justify-between text-green-200"
              >
                <span className="w-40">{skill.name}</span>
                <span className="flex-1 ml-4 text-green-400">
                  {getProgressBar(skill.level)}
                </span>
                <span className="ml-2 text-green-500">{skill.level}%</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
