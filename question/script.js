document.addEventListener("DOMContentLoaded",()=>{

let musicaIniciada=false;
let intentosNo=0;

function crearCorazon(){
  const heart=document.createElement("div");
  heart.className="heart";
  heart.innerHTML=["💗","💖","💕","❤️","🫶"][Math.floor(Math.random()*5)];
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(8+Math.random()*6)+"s";
  heart.style.fontSize=(1+Math.random()*2)+"rem";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(()=>heart.remove(),15000);
}

setInterval(crearCorazon,400);
for(let i=0;i<15;i++)crearCorazon();

window.siguiente=function(num){
  document.querySelectorAll(".container").forEach(c=>c.classList.add("hidden"));
  document.getElementById("pantalla"+num).classList.remove("hidden");

  if(!musicaIniciada){
    const musica=document.getElementById("musica");
    if(musica) musica.play().catch(()=>{});
    musicaIniciada=true;
  }

  if(num===7){
    setInterval(crearCorazon,150);
  }
}

window.rechazo=function(){
  const btnNo=document.getElementById("btnNo");
  const btnSi=document.getElementById("btnSi");
  intentosNo++;

  if(intentosNo>=20){
    btnNo.style.display="none";
    return;
  }

  btnNo.style.position="absolute";
  btnNo.style.left=Math.random()*70+15+"%";
  btnNo.style.top=Math.random()*60+20+"%";

  btnSi.style.transform=`scale(${1+intentosNo*0.05})`;
}

window.acepto=function(){
  siguiente(5);
}

document.getElementById("btnNo").addEventListener("mouseover",rechazo);

});
