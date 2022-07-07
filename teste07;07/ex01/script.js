

function getScore(score){

let scoreB = score > 80 && score <= 89;
let scoreC = score >= 70 && score <= 79;
let scoreD = score >= 60 && score <= 69;
let scoreF = score <= 60 && score >= 0;

let scoreFinal;

if(score >= 90 && score <=100) {
  scoreFinal = "A"
} else if(scoreB){
    scorefinal = "B"
}else if(scoreC){
    scorefinal = "C"
}else if(scoreD){
    scorefinal = "D"
}else if(scoreF){
    scorefinal = "F"
}else{
    scoreFinal = "nota inválida"
}

return scoreFinal
}

console.log(getScore(92))
console.log(getScore(-4))
console.log(getScore())
console.log(getScore(1))
console.log(getScore(65))
console.log(getScore(85))
console.log(getScore(95))
console.log(getScore(83))
