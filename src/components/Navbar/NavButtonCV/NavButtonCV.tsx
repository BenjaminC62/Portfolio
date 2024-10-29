import { Link } from "react-router-dom";
import { arrow } from '../../../types/navData';

const NavButtonCV: React.FC<arrow> = ({ upArrow }) => {
  return (
    <div className="relative inline-block font-poppins">
      <Link to="" target="_blank">
        <input
          type="button"
          value="CV"
          className="bg-main border-text border-2 rounded-3xl hover:bg-text text-white font-bold py-2 px-10 pr-12 transition-colors cursor-pointer relative z-10 hover:drop-shadow-img hover:shadow-text hover:transition-all"
        />
        <img
          src={upArrow}
          alt="Arrow"
          className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2 z-50 cursor-default pointer-events-none"
        />
      </Link>
    </div>
  );
}

export default NavButtonCV;
