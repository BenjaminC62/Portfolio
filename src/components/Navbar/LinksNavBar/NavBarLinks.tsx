// Note: This is the Hero Section Links component.
import githubIcon from "./../../../assets/icons-navbar/github-icon-navbar.png";
import linkedinIcon from "./../../../assets/icons-navbar/linkedin-icon-navbar.png";

const HeroSectionLinks = () => {
  return (
    <div className='flex flex-row'>
        <img src={githubIcon} className="w-10 h-10 mr-8 rounded-50 cursor-pointer ring-offset-primary" alt="github-icon"/>
        <img src={linkedinIcon} className="w-8 h-8 mr-8 cursor-pointer ring-offset-primary" alt="linkedin-icon"/>
    </div>
  )
}

export default HeroSectionLinks
