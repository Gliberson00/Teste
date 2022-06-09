var contador = 0
var input = document.getElementById('inputtarefa');
var btnADD =  document.getElementById('btn-add');
var main = document.getElementById('lista');

function addtarefa(){
    var valorinput = input.value;
    if((valorinput !=="") && (valorinput!==null) && (valorinput!==undefined)){
        
        ++contador;

        var novoitem = `<div id="${contador}" class="item ">
        <div onclick="maracarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        
        <div onclick="maracarTarefa(${contador})" class="item-nome">
        ${valorinput}
        </div>

       <div class="item-botao">
           <button onclick="deletar(${contador})"class="delete"> <i class="mdi mdi-delete"></i>deletar</button>
       </div>`;

       main.innerHTML += novoitem;

       input.value = "";
       input.focus();

    } 
}
function deletar(id){
    var  tarefa = document.getElementById(id);
    tatefa.remove();
}

function maracarTarefa(id){
    var item = var  tarefa = document.getElementById(id);
    var classe = item.getAttbute('class')

    if(classe == "item")
    item.classList.add('clicado')

    var icone = document.getElementById('icone_'+ id)
    icone.classList.remove('mdi-circle-outline');
    icone.classList.add('mdi-check-circle');

    item.parentNode.appendChild(item);
}

else{
    item.classList.remove('clicado');
    
    var icone = document.getElementById('icone_'+ id)
    icone.classList.remove('mdi-check-circle');
    icone.classList.add('mdi-circle-outline');
}


input.addEventListener("keyup", function(event)){
    if(event.keyCode ===13){
        event.preventDefault();
        btnADD.click();
    }

}