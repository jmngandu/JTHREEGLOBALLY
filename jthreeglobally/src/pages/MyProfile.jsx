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
        <small onClick={()=>setWelcome(`Welcome`)}>logout</small>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias laboriosam placeat nam iste cumque unde id quam ab ea? Rerum, hic officiis? Iure atque veritatis sequi quod aperiam ipsa.</p>
      
        </>
    )
}
