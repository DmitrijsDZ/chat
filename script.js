const API ="https://chat2022.dmitrijsdz.repl.co/"
let zina=document.querySelector('.manaZina')
let zinas=document.querySelector('.chataZinas')

function sutitZinu()
{
    console.log("funkcija darbojas");
    zinas.innerHTML= zinas.innerHTML+"<br/>"+zina.value;
}
 async function ielaidetChataZinas()
 {
let datiNoServera= await fetch('chatazinas.txt');
let dati= await datiNoServera.text();
zinas.innerHTML=dati;
 }
 setInterval(ielaidetChataZinas,1000)
