import { Link } from "react-router-dom"
export const Login=()=>{
    return(

        <>
        <div className="login-page">
        <h1>USER LOGIN</h1>
        <small>welcome to jthreeglobally</small>
        <div className="user-login">
        <input type="text" placeholder="Username" id="user-input"/>
        <input type="password" placeholder="Password" id="user-input" />
        <button className="input-btn login-btn"><Link to="/Dashboard">LOGIN</Link></button>
        <h3><Link to="/Signup" id="links">Signup?</Link></h3>

        </div>
        </div>
        </>
    )
}