// Note: This is the Hero Section Links component.
import { Link } from "react-router-dom";
import githubIcon from "./../../../assets/icons-navbar/github-icon-navbar.png";
import linkedinIcon from "./../../../assets/icons-navbar/linkedin-icon-navbar.png";

const HeroSectionLinks = () => {
  return (
    <div className='flex flex-row'>
        <Link to="https://github.com/BenjaminC62" target="_blank"><img src={githubIcon} className="w-10 h-10 mr-8 rounded-50 cursor-pointer ring-offset-primary" alt="github-icon"/></Link>
        <Link to="https://www.linkedin.com/in/benjamin-cornet62/" target="_blank"><img src={linkedinIcon} className="w-8 h-8 mr-8 cursor-pointer ring-offset-primary" alt="linkedin-icon"/></Link>
    </div>
  )
}

export default HeroSectionLinks
