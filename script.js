alert("Dunyo Yangiliklari saytiga xush kelibsiz!");
function xabar(){

    alert("Eng so'nggi yangiliklarni o'qishga xush kelibsiz!");

}   
let vaqt = new Date();

document.getElementById("sana").innerHTML = vaqt;
function like(){

    alert("Yangilik sizga yoqqanidan xursandmiz!");

}
function qidir(){

    alert("Qidiruv tizimi keyingi darsda ishlaydi.");

}
function darkMode(){

    document.body.classList.toggle("dark");

}
function qidir(){

let soz=document.getElementById("search").value;

alert("Siz qidirdingiz: "+soz);

}
setInterval(function(){

let vaqt=new Date();

document.getElementById("clock").innerHTML=vaqt.toLocaleTimeString();

},1000);
let son=document.querySelectorAll(".card").length;

document.getElementById("newsCount").innerHTML="Jami yangiliklar: "+son;