let num = document.getElementById('textc')
let list = document.getElementById('lista')
let res = document.getElementById('res')
let calculo = []

function adicionar{
    if(Number(num.value) >=1000000 && Number(Num.value) <= 0){
        calculo.push(Number(num.value))
        let item = document.getElementById('option')
        item.textc = `valor ${num.value} adicionado`
        lista.appendChild(item)

    }
}