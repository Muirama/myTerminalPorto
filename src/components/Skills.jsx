import { useEffect, useState } from 'react'

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // trigger animation after mount
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

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

  return (
    <div>
      <p className="mb-4 text-sm italic text-green-400">
        Voici une sélection des technologies, langages et outils que je maîtrise
        — la liste complète est plus longue !
      </p>

      {Object.entries(skillCategories).map(([category, skills], idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-green-300 font-bold mb-2">{category}</h3>
          <ul className="space-y-3">
            {skills.map((skill, i) => {
              const delay = `${(i + idx * 3) * 70}ms`
              return (
                <li
                  key={i}
                  className="skill-row flex items-center justify-between text-green-200"
                >
                  <div className="skill-name text-sm w-40 truncate">{skill.name}</div>

                  <div
                    className="skill-bar flex-1 mx-4"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} niveau ${skill.level} pour cent`}
                  >
                    <div
                      className="skill-fill"
                      style={{
                        width: mounted ? `${skill.level}%` : '0% ',
                        transitionDelay: mounted ? delay : '0ms',
                      }}
                    />
                  </div>

                  <div className="skill-percent ml-2 text-xs text-green-500 w-10 text-right">{skill.level}%</div>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
