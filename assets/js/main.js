/* REVEAL ANIMATION */

const reveals = document.querySelectorAll(".card,.price-card")

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1
entry.target.style.transform="translateY(0px)"

}

})

})

reveals.forEach(el=>{

el.style.opacity=0
el.style.transform="translateY(40px)"

observer.observe(el)

})


/* HERO PARALLAX */

let mouseX=0
let mouseY=0

document.addEventListener("mousemove",e=>{

mouseX=(e.clientX/window.innerWidth)-0.5
mouseY=(e.clientY/window.innerHeight)-0.5

})

function parallax(){

const globe=document.querySelector(".hero-globe")

if(globe){

globe.style.transform=

"translateY(-50%) translateX("+(mouseX*30)+"px) translateY("+(mouseY*20)+"px)"

}

requestAnimationFrame(parallax)

}

parallax()
