import { ProductsItems } from "./ProductsItems"
export const Products=()=>{
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
            <ProductsItems 
            capital="70"
            quantity="5"
            purchase="add to cart"
            />
            <ProductsItems 
            capital="70"
            quantity="5"
            purchase="add to cart"
            />
            <ProductsItems 
            capital="70"
            quantity="5"
            purchase="add to cart"
            />
            <ProductsItems 
            capital="70"
            quantity="5"
            purchase="add to cart"
            />
            <ProductsItems 
            capital="70"
            quantity="5"
            purchase="add to cart"
            />
            <ProductsItems 
            capital="70"
            quantity="5"
            purchase="add to cart"
            />
           
        </div>

        </>
    )
}