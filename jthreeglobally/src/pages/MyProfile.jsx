import { Header } from "../Components/Header"
import { useState } from "react"

export const MyProfile=()=>{
    let unknownUser = 'user'
    let userName = "jmngandu"
    const [welcome, setWelcome] = useState(`Welcome ${userName}`)
    return(
        <>
        <div className="header-dash">
        <Header/>
        </div>
        <div className="profile-section">
            <div className="my-info">
                <h1>{welcome}</h1>
                <img src="/src/images/green.jpg" id="profile-img"/>
                <p>name: <small>JAMES NGANDU</small></p>
                <p>username: <small>{userName}</small></p>
                <p>Email: <small>jamesmngandu@gmail.com</small></p>
            </div>
            <div className="my-order">
                <p>cart</p>
                <div className="order-categories">           
                <p>Category</p>
                <h3>fruits</h3>
                <h3>Vegetables</h3>
                <h3>Proteins</h3>
                <h3>Dairy</h3>
                </div>
            </div>

        </div>
        <h3 onClick={()=>setWelcome(`Welcome`)}>logout</h3>
        
      
        </>
    )
}
