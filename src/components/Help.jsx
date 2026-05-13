import {useLang} from "../hooks/useLang.js";
import t from "../i18n.js";

export default function Help() {
  const { lang } = useLang();
  const tr = t[lang];

  const cmds = [
    { cmd: "help", desc: tr.cmd_help },
    { cmd: "about", desc: tr.cmd_about },
    { cmd: "skills", desc: tr.cmd_skills },
    { cmd: "projects", desc: tr.cmd_projects },
    { cmd: "contact", desc: tr.cmd_contact },
    { cmd: "cv", desc: tr.cmd_cv },
    { cmd: "lang", desc: tr.cmd_lang },
    { cmd: "clear", desc: tr.cmd_clear },
    { cmd: "exit", desc: tr.cmd_exit },
  ];

  return (
    <div>
      <p style={{ color: "#666", fontSize: 12, marginBottom: 10 }}>
        {tr.help_title}
      </p>
      <div className="help-grid">
        {cmds.map(({ cmd, desc }) => (
          <>
            <span key={cmd + "-cmd"} className="help-cmd">
              {cmd}
            </span>
            <span key={cmd + "-desc"} className="help-desc">
              {desc}
            </span>
          </>
        ))}
      </div>
      <p className="help-tip">{tr.help_tip}</p>
    </div>
  );
}
