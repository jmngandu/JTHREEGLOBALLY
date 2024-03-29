
import { Link, NavLink } from "react-router-dom"
export const Header = ()=>{
    return(
        <div className="header-section">
            <Link to="/" id="logo">JTHREEGLOBALLY</Link>
            <div className="header-navs">
                <NavLink id="navs" to="/">HOME</NavLink>
                <NavLink id="navs" to="/Dashboard">DASHBOARD</NavLink>
                <NavLink id="navs" to="/Services">SERVICES</NavLink>
            </div>
            <div>
            <NavLink id="navs" to="/Login">LOGIN</NavLink>
            
            </div>
        </div>
    )
}
