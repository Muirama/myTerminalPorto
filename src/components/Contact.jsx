import { FiMail, FiLinkedin, FiGithub, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="font-mono text-green-300 space-y-4">
      <p>
        Je suis toujours ravi d’échanger sur des projets ou opportunités. 
        N’hésite pas à me contacter pour un travail, une étude, un freelance, 
        un projet ou toute autre collaboration !
      </p>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <FiMail className="text-green-400" />
          <span className="text-green-400 hover:underline">
            mandresy.michel.ramandimbinirina@esti.mg
          </span>
        </li>
        <li className="flex items-center gap-2">
          <FiLinkedin className="text-green-400" />
          <a
            href="https://linkedin.com/in/mandresy-michel-ramandimbinirina-1424b4298"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            linkedin.com/in/mandresy
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FiGithub className="text-green-400" />
          <a
            href="https://github.com/Muirama"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            github.com/Muirama
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FiPhone className="text-green-400" />
          <span>+261 34 23 405 14</span>
        </li>
      </ul>
    </div>
  );
}
