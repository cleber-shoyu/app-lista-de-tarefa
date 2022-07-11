
let contador = 0;
let input = document.getElementById('input-tarefa');
let botao = document.getElementById('botao');
let main = document.getElementById('listas');

function adicionartarefa(){
      let valorinput = input.value;


      if((valorinput !== "") && (valorinput !== null) && (valorinput!== undefined) ){
       ++contador; /*numero de id*/ 
       
        let novoitem = `
     <div  id="${contador}" class="item">
         <div onclick="marcartarefa(${contador})" class="item-icone">
             <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
         </div>
         <div class="item-nome">${valorinput}</div>
         <div class="item-botao"><Button class="delete" onclick="excluir(${contador})"><i class="mdi mdi-delete"></i>Deletar</Button></div>
      </div>`;

      main.innerHTML += novoitem;

      input.value = '';
      input.focus();

      }

}

input.addEventListener("keyup", function(event){
       if(event.keyCode === 13){
        event.preventDefault();  /**poe evento de botao enter */
       botao.click();
       }
});

function excluir(id) {
    let tarefas = document.getElementById(id);
    tarefas.remove();

}
function marcartarefa(id){
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if(classe === "item"){
        item.classList.add('clicado');
        let icone = document.getElementById('icone_' + id);

        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
    }else{
        item.classList.remove('clicado');
        let icone = document.getElementById('icone_' + id);

        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');    
    }
}