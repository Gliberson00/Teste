/* 90 pra cima e A
entre 80 a 89 e B
entre 70 a 79 e C
entre 60 a 69 e D
menor de 60 e F */






function getscore(score){
var scoreA = >= 90 && socre <= 100
var scoreB = >= 80 && score <= 89
var scoreC = >= 70 && score <= 79
var scoreD = >= 60 && score <= 69
var scoreF = < 60 && score >= 0

let scorefinal;

if(scoreA){
    scorefinal = "A"
}else if(scoreB){
    scorefinal = "B"
}else if(scoreC){
    scorefinal = "C"
}
else if(scoreD){
    scorefinal = "D"
}
else if(scoreF){
    scorefinal = "F"
}
else{
    scorefinal = " Nota invalida"
}
return scorefinal

}

console.log(getscore(101))
console.log(getscore(-1))
console.log(getscore(0))
console.log(getscore(1))
console.log(getscore(45))
console.log(getscore(60))
console.log(getscore(61))
console.log(getscore(75))
console.log(getscore(85))
console.log(getscore(95))


