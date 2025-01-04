import React from "react";
import LogoS  from '../../assets/images/logo-s.png'
import LogoSubtitle  from '../../assets/images/logo_sub.png'
import { Link, NavLink } from "react-router-dom";
import './index.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";




const SideBar = ()=>{

    return(
        <div className="nav-bar">
            <Link className="logo" to={'/'}>
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="logo-sub" />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact='true' className={'about-link'} activeclassname='active' to='/about'>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact='true' className={"contact-link"} activeclassname='active' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/rahul-s-97555b203/" target="_blank" rel="noreffer">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4f"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/rahul-sahadevan" target="_blank" rel="noreffer">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4f"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar