import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar'
import SideNav from '../components/Navbar/SideNav/SideNav';
import navData from './../components/Navbar/navData.json';
import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator';


function Home() {
  return (
    <>
      <SideNav data={navData.navList} name={navData.name} lastName={navData.lastName} firstPage={navData.firstPage} homeIcon={navData.homeIcon} />
      <Navbar data={navData.navList} name={navData.name} lastName={navData.lastName} firstPage={navData.firstPage} homeIcon={navData.homeIcon}/>
      <HeroSection />
      <ScrollIndicator />
    </>
  )
}

export default Home;
