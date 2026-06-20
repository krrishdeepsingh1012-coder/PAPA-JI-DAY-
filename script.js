const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX-120+"px";
glow.style.top=e.clientY-120+"px";

});

document.querySelectorAll(".photo-card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/15;
const rotateX=-(y-rect.height/2)/15;

card.style.transform=
`rotateY(${rotateY}deg)
 rotateX(${rotateX}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"rotateY(0deg) rotateX(0deg)";

});

});

const text=`
Thank you for every sacrifice,
every lesson,
every silent prayer,
and every moment you stood behind me.

I may not say it enough,
but everything I am today
has your fingerprints on it.

Happy Father's Day ❤️
`;

let i=0;

function type(){

if(i<text.length){

document.getElementById("typing").innerHTML+=
text.charAt(i);

i++;

setTimeout(type,35);

}

}

type();

document.querySelectorAll(".counter")
.forEach(counter=>{

let target=
+counter.getAttribute("data-target");

let count=0;

let speed=target/200;

function update(){

count+=speed;

if(count<target){

counter.innerText=
Math.floor(count);

requestAnimationFrame(update);

}
else{

counter.innerText=
target.toLocaleString();

}

}

update();

});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".photo-card",{

scale:.5,

opacity:0,

duration:1.5,

scrollTrigger:{
trigger:".photo-card"
}

});

gsap.from(".letter",{

y:150,

opacity:0,

duration:1.5,

scrollTrigger:{
trigger:".letter"
}

});

gsap.from(".ending h1",{

scale:0,

rotation:360,

duration:2,

scrollTrigger:{
trigger:".ending"
}

});

setInterval(()=>{

let star=
document.createElement("div");

star.className="star";

document.body.appendChild(star);

star.style.position="fixed";
star.style.width="150px";
star.style.height="2px";
star.style.background="white";

star.style.left="120%";
star.style.top=Math.random()*100+"%";

star.style.transform=
"rotate(-35deg)";

star.style.zIndex="0";

star.animate([
{
left:"120%",
top:"0%"
},
{
left:"-20%",
top:"100%"
}
],{
duration:3000
});

setTimeout(()=>{
star.remove();
},3000);

},2500);
