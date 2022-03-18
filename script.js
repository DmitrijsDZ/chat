const API ="https://chat2022.dmitrijsdz.repl.co"
let zina=document.querySelector('.manaZina')
let zinas=document.querySelector('.chataZinas')
let vards=document.querySelector('.vards')


function sutitZinu()
{
    console.log("funkcija darbojas");
    zinas.innerHTML= zinas.innerHTML+"<br/>"+zina.value;


    fetch(API+'/sutit/'+vards.value+'/'+zina.value)
}
 async function ielaidetChataZinas()
 {
let datiNoServera= await fetch(API +'/lasit');
let dati= await datiNoServera.text();
zinas.innerHTML=dati;
 }


 async function ielaidetChataZinasJson()
 {
let datiNoServera= await fetch(API +'/lasit');
let dati= await datiNoServera.json();

i=0
while(i<await dati.lenght())
{
    i=i+1;
    console.log(i)
}
//console.log(await dati)
 }
 setInterval(ielaidetChataZinas,1000)
