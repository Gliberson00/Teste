function cacular(n1,n2){
    n1 = parsefloat(document.getElementById("n1").value)
    n2 = parsefloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch(selector){
        case'+':
        calculo =(n1 + n2)
        document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} e = ${calculo}`
        break
        
        case'-':
        calculo =(n1 - n2)
        document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} - ${n2} e = ${calculo}`

        case'/':
        calculo = math.round(n1 / n2)
        if(Number.isNaN(cacular)){ document.getElementById("resultado").innerHTML = `insira um divisivel valido!`
       }else{document.getElementById("resultado").innerHTML = `O resultado da divisãp de ${n1} - ${n2} e = ${calculo}`
       break
    }
    case'*':
    calculo =(n1 * n2)
    document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} * ${n2} é = ${calculo}.`
        

    }

    case'dividir':
    calculo = math.round(n1 / n2)
    if(Number.isNaN(cacular)){ document.getElementById("resultado").innerHTML = `insira um divisivel valido!`
   }else{document.getElementById("resultado").innerHTML = `O resultado da porcentagem de ${n1} * ${n2}  / ${100} e = ${calculo}`
   break
}
