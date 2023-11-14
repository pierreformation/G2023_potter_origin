import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (<div className="headerContainer">
      <Link className="menu" to="/gryffindor">
         gryffindor
      </Link>
      <Link className="menu" to="/slytherin">slytherin</Link>
      <Link className="menu" to="/hufflepuff">hufflepuff</Link>
      <Link className="menu" to="/gryffindor">ravenclaw</Link>
        HARRY POTTER
      <Link className="menu" to="/">home</Link>
    </div>)
};

export default Header;
