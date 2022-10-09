// let gsw = 00
// let lakers = 00
// document.getElementById("gsw-score").textContent = 00
// document.getElementById("lakers-score").textContent = 00

let scoreGSW = document.getElementById("gsw-score")
console.log(scoreGSW);
let miamiPoint = 0

function point1(){
    miamiPoint += 01
    scoreGSW.textContent = miamiPoint;
}
function point2(){
    miamiPoint += 02
    scoreGSW.textContent = miamiPoint;
}
function point3(){
    miamiPoint += 03
    scoreGSW.textContent = miamiPoint
}



let scoreLakers = document.getElementById("lakers-score")
console.log(scoreLakers);
let lakersPoints = 0

function lakers1(){
    lakersPoints += 01
    scoreLakers.textContent = lakersPoints
}
function lakers2(){
    lakersPoints += 02
    scoreLakers.textContent = lakersPoints
}
function lakers3(){
    lakersPoints += 03
    scoreLakers.textContent = lakersPoints
}