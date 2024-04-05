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
        <p><small>Name: </small>James Ngandu</p>
        <p><small>Username: </small>{userName}</p>
        <p><small>Aboutme: </small>Am a computer scientists </p>
        <small onClick={()=>setWelcome(`Welcome`)}>logout</small>
        
      
        </>
    )
}
