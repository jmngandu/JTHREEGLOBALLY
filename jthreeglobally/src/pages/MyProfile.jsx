import { Header } from "../Components/Header"
import { useState } from "react"

export const MyProfile=()=>{
    let unknownUser = 'user'
    let userName = "jmngandu"
    const [welcome, setWelcome] = useState(`Welcome ${userName}`)
    return(
        <>
        <Header/>
        <h1>{welcome}</h1>
        <p>Name: <small>James Ngandu</small></p>
        <p>Username: <small>{userName}</small></p>
        <p>Aboutme: <small>Am a computer scientists </small></p>
        <h3 onClick={()=>setWelcome(`Welcome`)}>logout</h3>
        
      
        </>
    )
}
