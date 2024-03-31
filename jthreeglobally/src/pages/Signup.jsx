import { Link } from "react-router-dom"
export const Signup =()=>{
    return(
        <>
        <div className="signup-page">
        <h1>SIGNUP NOW</h1>
        <input type="text" placeholder="Firstname" id="user-input"/>
        <input type="text" placeholder="Lastname" id="user-input"/>
            <div className="signup-inputs">
            <input type="email" placeholder="Email" id="user-input"/>
                <input type="password" placeholder="Password" id="user-input"/>
                <input type="password" placeholder="Confirm Password" id="user-input"/>
                <button className="input-btn sign-btn"><Link to="/Dashboard">SIGNUP</Link></button>
                <p>Already have an account?<Link to="/Login" id="links">Login here</Link></p>
                </div>
        

        </div>
        </>
    )
}