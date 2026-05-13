import {useLang} from "../hooks/useLang.js";
import t from "../i18n.js";

const SUPPORTED = ["fr", "en"];
const FLAGS = { fr: "🇫🇷 Français", en: "🇬🇧 English" };

export default function Lang({ args }) {
  const { lang } = useLang();
  const tr = t[lang];
  const requested = args?.[0]?.toLowerCase();

  if (!requested) {
    return (
      <div className="lang-wrap">
        <p className="lang-current">
          {tr.lang_current} <span className="lang-key">{FLAGS[lang]}</span>
        </p>
        <p className="lang-usage">
          {tr.lang_usage} <span className="lang-key">lang fr</span> |{" "}
          <span className="lang-key">lang en</span>
        </p>
      </div>
    );
  }

  if (!SUPPORTED.includes(requested)) {
    return <p className="lang-err">{tr.lang_unsupported}</p>;
  }

  if (requested === lang) {
    return (
      <p className="lang-current">
        {FLAGS[lang]} — {tr.lang_already}{" "}
        <span className="lang-key">{FLAGS[lang]}</span>.
      </p>
    );
  }

  // Le changement réel est géré dans Terminal.jsx via setLang()
  return null;
}
