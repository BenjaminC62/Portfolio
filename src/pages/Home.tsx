import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar'
import navData from './../components/Navbar/navData.json'

function Home() {
  return (
    <>
      <Navbar data={navData}/>
      <HeroSection />
    </>
  )
}

export default Home;
