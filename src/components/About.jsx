import { useLang } from "../hooks/useLang.js";
import t from "../i18n.js";

export default function About() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <div className="about-wrap">
      <img
        src="/images/profile.png"
        alt="Photo de profil"
        className="about-avatar"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="about-content">
        <p className="about-name">Mandresy Michel RAMANDIMBINIRINA</p>
        <p className="about-role">{tr.about_role}</p>
        <p className="about-text">{tr.about_p1}</p>
        <p className="about-text">
          {tr.about_p2} <span className="about-strong">{tr.about_p2b}</span>{" "}
          {tr.about_p2c}
          <span className="about-strong">{tr.about_p2d}</span>
          {tr.about_p2e}
        </p>
        <p className="about-text">{tr.about_p3}</p>
        <div className="about-meta">
          <span> {tr.about_loc}</span>
          <span> {tr.about_school}</span>
        </div>
      </div>
    </div>
  );
}
