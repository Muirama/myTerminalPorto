import { FiMail, FiLinkedin, FiGithub, FiPhone } from "react-icons/fi";
import {useLang} from "../hooks/useLang.js";
import t from "../i18n.js";

export default function Contact() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <div>
      <p className="contact-intro">{tr.contact_intro}</p>
      <div className="contact-list">
        <div className="contact-item">
          <FiMail className="contact-icon" size={14} />
          <span className="contact-text">
            mandresy.michel.ramandimbinirina@esti.mg
          </span>
        </div>
        <div className="contact-item">
          <FiLinkedin className="contact-icon" size={14} />
          <a
            href="https://linkedin.com/in/mandresy-michel-ramandimbinirina-1424b4298"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-label"
          >
            linkedin.com/in/mandresy
          </a>
        </div>
        <div className="contact-item">
          <FiGithub className="contact-icon" size={14} />
          <a
            href="https://github.com/Muirama"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-label"
          >
            github.com/Muirama
          </a>
        </div>
        <div className="contact-item">
          <FiPhone className="contact-icon" size={14} />
          <span className="contact-text">+261 34 23 405 14</span>
        </div>
      </div>
    </div>
  );
}
