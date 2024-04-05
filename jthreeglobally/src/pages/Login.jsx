import { Link } from "react-router-dom"
import { useState } from "react"
export const Login=()=>{
    const [message, setMessage] = useState('welcome to jthreeglobally')
    return(

        <>
        <div className="login-page">
        <h1>USER LOGIN</h1>
        <small>{message}</small>
        <div className="user-login">
        <input type="text" placeholder="Username" id="user-input"/>
        <input type="password" placeholder="Password" id="user-input" />
        <button className="input-btn login-btn"><Link to="/Dashboard">LOGIN</Link></button>
        <p><Link to="/Login" id="links" onClick={()=>setMessage('check your email a message has been sent')}>forgotten password?</Link></p>
        <h3><Link to="/Signup" id="links">Signup?</Link></h3>

        </div>
        </div>
        </>
    )
}