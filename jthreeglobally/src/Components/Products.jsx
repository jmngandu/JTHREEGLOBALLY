import { ProductsItems } from "./ProductsItems"
import ProductsData from "./ProductsData"
export const Products=()=>{
    const ProductsList = ProductsData.map(pro=>{
        return(
            <>
                 <ProductsItems 
                 key={pro.id}
                pro={pro}
                 />
            </>
        )
    })
    return(
        <>
        <h1>OUR PRODUCTS</h1>
        <div className="products-section">
            <div className="products-page">
                <p>Category</p>
                <h3>Fruits</h3>
                <h3>Vegetables</h3>
                <h3>Proteins</h3>
                <h3>Dairy</h3>
            </div>
            <div className="products-pages">
            {ProductsList}
            </div>
        </div>

        </>
    )
}