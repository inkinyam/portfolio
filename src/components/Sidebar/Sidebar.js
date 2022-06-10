import './Sidebar.scss'
import LogoI from '../../assets/images/logo-i.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faVk,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoI} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
     <ul>
     <li>
         <a target="_blank" 
            rel="noreferrer" 
            href="https://www.linkedin.com/in/%D0%BD%D0%B0%D1%82%D0%B0%D0%BB%D1%8C%D1%8F-%D1%81%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0-69a26aa3/"
          >
           <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
         </a>
       </li>

       <li>
         <a target="_blank" 
            rel="noreferrer" 
            href="https://github.com/inkinyam"
          >
           <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
         </a>
       </li>

       <li>
         <a target="_blank" 
            rel="noreferrer" 
            href="https://vk.com/i_n_k_i"
          >
           <FontAwesomeIcon icon={faVk} color='#4d4d4e'/>
         </a>
       </li>

       <li>
         <a target="_blank" 
            rel="noreferrer" 
            href="https://t.me/i_n_k_i"
          >
           <FontAwesomeIcon icon={faTelegram} color='#4d4d4e'/>
         </a>
       </li>
     </ul>
    </div>
  )
}

export default Sidebar
