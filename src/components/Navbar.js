import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/NavContext";

const Navbar = () => {
  const { isToggle, setIsToggle } = useGlobalContext();

  return (
    <nav>
      <h1 className="logo">Fun Movies App</h1>
      <button className="btn-show" onClick={() => setIsToggle(!isToggle)}>
        {isToggle ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>

      <ul className={isToggle && "show"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/watchlist">WatchList</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
