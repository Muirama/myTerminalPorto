import { useState, useEffect } from "react";
import {useLang} from "../hooks/useLang.js";
import t from "../i18n.js";

export default function CV() {
  const [status, setStatus] = useState("checking");
  const { lang } = useLang();
  const tr = t[lang];

  useEffect(() => {
    fetch("/cv.pdf", { method: "HEAD" })
      .then((r) => setStatus(r.ok ? "ok" : "missing"))
      .catch(() => setStatus("missing"));
  }, []);

  if (status === "checking") {
    return <p className="cv-checking">{tr.cv_check}</p>;
  }

  if (status === "missing") {
    return (
      <div className="cv-wrap">
        <p className="cv-error">{tr.cv_missing}</p>
        <p style={{ fontSize: 12, color: "var(--dim)" }}>
          {tr.cv_contact} <span style={{ color: "var(--cyan)" }}>contact</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="cv-wrap">
      <p className="cv-title">{tr.cv_title}</p>
      <a
        href="/cv.pdf"
        download="Mandresy_Michel_Ramandimbinirina_CV.pdf"
        className="cv-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {tr.cv_dl}
      </a>
      <p className="cv-date">{tr.cv_date}</p>
    </div>
  );
}
