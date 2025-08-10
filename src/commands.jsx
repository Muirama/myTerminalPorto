import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Help from './components/Help.jsx'
import CV from './components/CV.jsx'

const commands = {
  help: Help,
  about: About,
  skills: Skills,
  projects: Projects,
  contact: Contact,
  cv : CV,
  clear: null, 
  exit: () => <p>Merci de votre visite. À bientôt !</p>,
}

export default commands
