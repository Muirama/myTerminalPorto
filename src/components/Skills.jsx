import { useEffect, useState } from "react";
import { useLang } from "../hooks/useLang.js";
import t from "../i18n.js";

const skillCategories = {
  "Front-end": [
    { name: "React.js", level: 95 },
    { name: "Vue.js", level: 85 },
  ],
  "Back-end": [
    { name: "PHP (Laravel , Symfony)", level: 85 },
    { name: "Node.js / Express.js", level: 90 },
    { name: "Java (Spring Boot)", level: 80 },
  ],
  Mobile: [
    { name: "React Native", level: 95 },
    { name: "Flutter", level: 80 },
  ],
  "Base de données": [
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 70 },
  ],
  Outils: [
    { name: "Git / GitHub", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 75 },
  ],
  "Développement jeux": [{ name: "Godot Engine", level: 50 }],
};

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLang();
  const tr = t[lang];

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(id);
  }, []);

  return (
    <div>
      <p className="skills-intro">{tr.skills_intro}</p>
      {Object.entries(skillCategories).map(([cat, skills], ci) => (
        <div key={cat} className="skills-cat">
          <p className="skills-cat-title">{cat}</p>
          {skills.map((skill, si) => (
            <div key={skill.name} className="skill-row">
              <span className="skill-name">{skill.name}</span>
              <div
                className="skill-bar"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} ${skill.level}%`}
              >
                <div
                  className="skill-fill"
                  style={{
                    width: mounted ? `${skill.level}%` : "0%",
                    transitionDelay: mounted
                      ? `${(si + ci * 3) * 60}ms`
                      : "0ms",
                  }}
                />
              </div>
              <span className="skill-pct">{skill.level}%</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
