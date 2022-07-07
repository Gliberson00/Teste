let familia = {
   salario: [1000,1500,300],
   despesas: [800,150,100,100,110]

}

function sum(array){
   let total = 0;

   for(let value of array)
   {
      total += value
   }
   return total
}

function calculofinal(){
   const calculoSal = sum(familia.salario)
   const calculoDes = sum(familia.despesas)

   const total = calculoSal - calculoDes
  

   let dinheiroconta = "negativo"

   if (total >= 0) {
      dinheiroconta = "positivo"

   }
console.log(`O saldo e ${dinheiroconta}: sua conta tem ${total}`)
  
}

calculofinal()