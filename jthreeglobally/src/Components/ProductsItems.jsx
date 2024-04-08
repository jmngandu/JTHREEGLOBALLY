
export const ProductsItems=(myProducts)=>{
    return(
        <>
         <div className="products-list">
                <div className="products">
                <p>{myProducts.capital}</p>
                <p>{myProducts.quantity}</p>
                <p>{myProducts.purchase}</p>
                </div>                
            </div>
        </>
    )
}