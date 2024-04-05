import { Header } from "../Components/Header"
import { useState } from "react"

export const MyProfile=()=>{
    let unknownUser = 'user'
    let userName = "james"
    const [welcome, setWelcome] = useState(`Welcome ${userName}`)
    return(
        <>
        <Header/>
        <h1>{welcome}</h1>
        <small onClick={()=>setWelcome(`Welcome ${unknownUser}`)}>Name</small>
        <h2>My profile</h2>
        </>
    )
}
