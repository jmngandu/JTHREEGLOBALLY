
import { NavLink } from "react-router-dom"
export const Header = ()=>{
    return(
        <div className="header-section">
            <h1>J3G</h1>
            <div className="header-navs">
                <NavLink id="navs" to="/">HOME</NavLink>
                <NavLink id="navs" to="/Dashboard">DASHBOARD</NavLink>
                <NavLink id="navs" to="/Login">LOGIN</NavLink>
            </div>
            <div>
            <NavLink id="navs" to="/">SERVICES</NavLink>
            </div>
        </div>
    )
}
