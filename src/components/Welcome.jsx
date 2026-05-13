import {useLang} from "../hooks/useLang.js";
import t from "../i18n.js";

export default function Welcome() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <div className="welcome">
      <pre
        className="welcome-ascii"
        aria-hidden="true"
      >{`  ███╗   ███╗███╗   ███╗██████╗ 
  ████╗ ████║████╗ ████║██╔══██╗
  ██╔████╔██║██╔████╔██║██████╔╝
  ██║╚██╔╝██║██║╚██╔╝██║██╔══██╗
  ██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║
  ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝`}</pre>
      <p className="welcome-name">{tr.welcome_name}</p>
      <p className="welcome-sub">{tr.welcome_sub}</p>
      <div className="welcome-hints">
        <span>
          {tr.welcome_hint1} <span className="hint-key">help</span>{" "}
          {tr.welcome_hint2}
        </span>
        <span>
          {tr.welcome_hint3} <span className="hint-key">↑ ↓</span>{" "}
          {tr.welcome_hint4} <span className="hint-key">Tab</span>{" "}
          {tr.welcome_hint5}
        </span>
      </div>
    </div>
  );
}
