const buyProducts = document.getElementById("buy-products")
const btn = document.querySelector("#main-btn").addEventListener("click", ()=>{
    // document.body.style.backgroundColor = 'dodgerblue';
    buyProducts.innerHTML = "<button onclick='ourProducts()'>EXPLORE PRODUCTS</button>"
});

function ourProducts(){
    alert("please wait ...")
    buyProducts.innerHTML = "<button onclick='ourProducts()'>THANKS FOR SHOPPING</button>"
}
let helpTag = document.getElementById("help-tag")
helpTag.addEventListener("dblclick",()=>{
    document.body.style.backgroundColor = 'grey';
    helpTag.innerText = "DARK THEME"
})
helpTag.addEventListener("click",()=>{
    document.body.style.backgroundColor = 'white';
    helpTag.innerText = "LIGHT THEME"
})
