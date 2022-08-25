import "./index.scss"
import { Link, NavLink} from "react-router-dom";
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/" >
        <img src={LogoS} alt='logo'/>
      </Link>
      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#ffff'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
            <FontAwesomeIcon icon={faUser} color='#ffff'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className="contact-link" to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#ffff'/>
        </NavLink>
      </nav>
      <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Equinox">
                <FontAwesomeIcon icon={faFacebookF} color="#ffff"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/equinox">
                <FontAwesomeIcon icon={faYoutube} color="#ffff"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/Equinox">
                <FontAwesomeIcon icon={faTwitter} color="#ffff"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/equinox/">
                <FontAwesomeIcon icon={faInstagram} color="#ffff"/>
            </a>
        </li>
      </ul>
    </div>
  )
}
