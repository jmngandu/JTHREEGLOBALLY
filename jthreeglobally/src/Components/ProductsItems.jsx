export const ProductsItems = (myProducts) => {
  return (
    <>
      <div className="products-list">
        <div className="products">
          <img src="/src/images/apple.png" />
          <p>{myProducts.pro.name}</p>
          <p>KSH: {myProducts.pro.capital}</p>
          <p>Quantity: {myProducts.pro.quantity}</p>
          <p>{myProducts.pro.purchase}</p>
        </div>
      </div>
    </>
  );
};
