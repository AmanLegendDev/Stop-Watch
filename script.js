let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let startButton = document.querySelector(".btn1");
let stopButton = document.querySelector(".btn2");
let hour = document.querySelector(".hour");
let restart = document.querySelector(".btn3");
let clock = document.querySelector(".clock")
let hr = 0;
let second = 0;
let minut = 0;
let s = 0;

startButton.addEventListener("click",function(){
   let int = setInterval(function(){

second++
if (second <= 9){

    sec.textContent = `${0},${second}`
}else{
    sec.textContent = second;
}
if(second === 60){
    minut++
    second = 0;
}if(minut <= 9){
    min.textContent = `0${minut}`;
}else{
    min.textContent = minut;
}
if (minut === 60){
    hr++
    hour.textContent = hr;
    minut = 0;


    
}


},1000);


stopButton.addEventListener("click",function(){
clearInterval(int);
});

restart.addEventListener("click",function(){
hr = 0;
second = 0;
minut = 0;
sec.textContent = `${second}0`;
min.textContent = `${second}0`;
hour.textContent = `${second}0`;
});
});

let lap = document.querySelector(".btn4");
let h1 = document.querySelector("h1");



lap.addEventListener("click",function(){
let text = document.createElement("div")
s++
text.textContent = `${s},${"|"},${hr},${minut},${second},`;
h1.appendChild(text);
let icon = document.createElement("i");
icon.className = "fa-solid fa-trash"

h1.appendChild(icon);

icon.addEventListener("click",function(dels){
    
    text.textContent = "";
    icon.remove();
})
});


let laps = JSON.parse(localStorage.getItem("lap")) || [];

lap.push(text.content);

localStorage.setItem("laps",JSON.stringify(laps));


window.addEventListener("load", function() {
    let savedLaps = JSON.parse(localStorage.getItem("laps")) || [];
    savedLaps.forEach(function(lapText) {
        let text = document.createElement("div");
        text.textContent = lapText;

        let icon = document.createElement("i");
        icon.className = "fa-solid fa-trash";

        icon.addEventListener("click", function() {
            text.remove();
            // remove from local storage
            let laps = JSON.parse(localStorage.getItem("laps")) || [];
            laps = laps.filter(l => l !== lapText);
            localStorage.setItem("laps", JSON.stringify(laps));
        });

        h1.appendChild(text);
        h1.appendChild(icon);
    });
});