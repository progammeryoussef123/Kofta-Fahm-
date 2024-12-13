let p = document.getElementById("scroll-p");
let btn = document.getElementById("btn");
let img = document.getElementById("img");
let btnTop = document.getElementById("btn-top");

window.onscroll = ()=>{
    if(scrollY >= 440){
        p.classList.add("scroll");
        btn.classList.add("scroll");
        img.classList.add("scroll-to");
        btnTop.style.display = "block";
    }
    else{
        p.classList.remove("scroll");
        img.classList.remove("scroll-to");
        btn.classList.remove("scroll");
        btnTop.style.display = "none";
    }
}

btnTop.onclick = ()=>{
    scroll({
        top:0,
        left:0,
        behavior:"smooth",
    });
}