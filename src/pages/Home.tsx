import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar'
import navData from './../components/Navbar/navData.json'

function Home() {
  return (
    <>
      <Navbar data={navData.navList} name={navData.name} lastName={navData.lastName} firstPage={navData.firstPage} />
      <HeroSection />
    </>
  )
}

export default Home;
