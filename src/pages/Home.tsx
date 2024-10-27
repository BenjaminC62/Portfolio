import Navbar from '../components/Navbar/Navbar'
import navData from './../components/Navbar/navData.json'

function Home() {
  return (
    <div>
      <Navbar data={navData}/>
    </div>
  )
}

export default Home;
