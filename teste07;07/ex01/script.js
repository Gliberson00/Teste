

function getScore(score){

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreE = score <= 60 && score >= 0
    
    let scoreFinal;
    
  if(scoreA){
    scoreFinal = "A"
  } else if(scoreB){
    scoreFinal = "B"
  }else if(scoreC){
    scoreFinal = "C"
  }else if(scoreD){
    scoreFinal = "D"
  }else if(scoreE){
    scoreFinal = "E"
  }else{
    scoreFinal = "NOTA INVALIDA"
  }
    
    
    return scoreFinal;
    }
    
console.log(getScore(30))
console.log(getScore(92))
console.log(getScore(-4))
console.log(getScore())
console.log(getScore(1))
console.log(getScore(65))
console.log(getScore(85))
console.log(getScore(95))
console.log(getScore(83))
