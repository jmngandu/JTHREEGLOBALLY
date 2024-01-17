// const btn = document.querySelector("#main-btn").addEventListener("click", ()=>{
//     document.body.style.backgroundColor = 'dodgerblue';
//     alert("please wait the system is under construction")
//     document.body.style.backgroundColor = 'grey';
// });
let count = 0
function prnt(){
    alert("am done")
}
let countEl = document.getElementById("count-el")
function countBtn(){
   countEl.textContent = `count: ${count+=1}`
    prnt()
}