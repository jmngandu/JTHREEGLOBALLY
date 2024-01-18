const btn = document.querySelector("#main-btn").addEventListener("click", ()=>{
    document.body.style.backgroundColor = 'dodgerblue';
    alert("please wait the system is under construction")
    document.body.style.backgroundColor = 'grey';
});

const helpTag = document.getElementById("help-tag")

helpTag.addEventListener("dblclick",()=>{
    helpTag.innerHTML = "<ul> Help page not Ready</ul>"
})
