import Navbar from './Navbar'

function Home() {
  return (
    <div>
      <Navbar data={[
                { id: 1, title: 'About me', link: '#' },
                { id: 2, title: 'Project', link: '#' },
                { id: 3, title: 'Timeline', link: '#' }
            ]} />
    </div>
  )
}

export default Home
