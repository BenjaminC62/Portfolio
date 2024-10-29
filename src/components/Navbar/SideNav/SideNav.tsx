import { Link } from "react-router-dom"
import { NavbarProps } from "../../../types/navData"


const SideNav: React.FC<NavbarProps> = ({ data, firstPage, homeIcon }) => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 bg-gray-800 bg-opacity-15 rounded-lg p-4 pt-12 pb-12 mr-9">
      <ul className="flex flex-col text-white gap-4 text-xl">
        <li className="mx-2 text-text font-bold underline text-center"><Link to="/"><img src={homeIcon} alt={firstPage}/></Link></li>
        {data.map((item) => (
          <li key={item.id} className="mx-auto hover:text-text transition-all mt-8">
            <Link to={item.link}><img src={item.image} alt={item.title} /></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideNav
