function abrirSite(){

let entrada = document.getElementById("entrada");

let site = document.getElementById("site");


entrada.style.opacity="0";


setTimeout(()=>{

entrada.style.display="none";

site.classList.remove("escondido");


},1000);


}






function abrirCarta(){

let carta=document.querySelector(".carta");

carta.classList.toggle("aberta");


}






let inicio = new Date("2025-11-02");



function atualizarContador(){


let agora=new Date();


let tempo=agora-inicio;



let dias=Math.floor(
tempo/(1000*60*60*24)
);



let horas=Math.floor(
(tempo/(1000*60*60))%24
);



let minutos=Math.floor(
(tempo/(1000*60))%60
);



document.getElementById("contador").innerHTML=

dias+" dias 🤍 "+horas+" horas 🤍 "+minutos+" minutos";


}



setInterval(atualizarContador,1000);

atualizarContador();







function criarCoracao(){


let coracao=document.createElement("div");


coracao.innerHTML="🤍";


coracao.className="coracao";



coracao.style.left=Math.random()*100+"vw";


coracao.style.animationDuration=

(Math.random()*3+3)+"s";



document.body.appendChild(coracao);



setTimeout(()=>{

coracao.remove();

},6000);



}



setInterval(criarCoracao,350);