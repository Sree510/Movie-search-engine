import {Link, Links} from "react-router-dom";
import "../css/NavBar.css"

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie Hub</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-links">Home</Link>
            <Link to="/fav" className="nav-links">Fav</Link>
        </div>
    </nav>
}
export default NavBar