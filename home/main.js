const buyProducts = document.getElementById("buy-products")
const btn = document.querySelector("#main-btn").addEventListener("click", ()=>{
    // document.body.style.backgroundColor = 'dodgerblue';
    buyProducts.innerHTML = "<button onclick='ourProducts()'>EXPLORE PRODUCTS</button>"
});

function ourProducts(){
    alert("please wait ...")
    buyProducts.innerHTML = "<button onclick='ourProducts()'>THANKS FOR SHOPPING</button>"
}
const helpTag = document.getElementById("help-tag")
helpTag.addEventListener("dblclick",()=>{
    document.body.style.backgroundColor = 'dodgerblue';
    document.body.style.backgroundColor = 'grey';
})
