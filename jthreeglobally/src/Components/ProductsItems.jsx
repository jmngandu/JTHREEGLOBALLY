
export const ProductsItems=(myProducts)=>{
    return(
        <>
         <div className="products-list">
                <div className="products">
                <p>{myProducts.pro.capital}</p>
                <p>{myProducts.pro.quantity}</p>
                <p>{myProducts.pro.purchase}</p>
                </div>                
            </div>
        </>
    )
}