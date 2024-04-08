import { Header } from "../Components/Header"

export const Dashboard = () =>{
    return(
        <>
        <Header/>
        <h1>OUR PRODUCTS</h1>
        <div className="products-section">
            <div className="products-page"></div>
            <div className="products-list"></div>
        </div>

        </>
    )
}