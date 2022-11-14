var inputItemParaALista = $("#ipt_item_para_a_lista");
var elementoParaAtualizar = null;

inputItemParaALista.keypress(function (event) { 
    if(event.keyCode === 13) {
        onAddItem();
    }
});
//faz o botao adicionar o item
$("#btn_add_item").click(function() {
    
        onAddItem();      
});

function onAddItem() {
    let valorDoInput = inputItemParaALista.val();//recupera o valor do input
    
        escreverNovaLinhaNaTabelaListaDeItems(valorDoInput);
    
    

    inputItemParaALista.val("");//limpa o campo do input

    inputItemParaALista.focus();//retona o foco para o input
}

//escreve o input na tabela
function linhaDaTabelaListaDeItems(nomeDoItem) {
    return ` <div class="item">
    <tr>
                <td>${nomeDoItem}</td>
                <td class="btn_remover_editar">
                    <button type="button"  onclick="botaoAtualizarItem(event)">
                    <i class="fa-solid fa-pen" border="none"></i>
                    </button>
                    <button type="button"  onclick="botaoRemoverItem(event)">
                    <i class="fa-solid fa-delete-left"></i>
                    </button>
                    <button type="button"  onclick="botaoRiscarItem(event)">
                    <i class="fa-solid fa-check"></i>
                    </button>
                </td>
            </tr> </div>`
}

function botaoAtualizarItem(event) {
    // adiciona o elemento em uma variavel, para ser utiliza em outros trechos do código <td>
    elementoParaAtualizar = $($(event.currentTarget).parent().parent().children()[0]);
    let valorDoItem = elementoParaAtualizar.text();
    inputItemParaALista.val(valorDoItem);
    $("button#btn_add_item").text('Atualizar');
}

function botaoRemoverItem(event) {
    $(event.currentTarget).parent().parent().remove();
    
}

function botaoRiscarItem(){
    td.style.textDecoration ="line-through"
}




//escreve na tabela sem excluir o que esta escrito
function escreverNovaLinhaNaTabelaListaDeItems(valorDoInput) {
    let valoresJaExistentes = $("table#tabela_lista_de_items>tbody").html()

    // se a condição for verdadeira, atualiza o elemento
    if(elementoParaAtualizar !== null) {
        elementoParaAtualizar.text(valorDoInput);
        elementoParaAtualizar = null;
        $("button#btn_add_item").html(`<i class="fa-thin fa-plus" border="none">`);
    } else { // se não, cria uma nova linha
        $("table#tabela_lista_de_items>tbody").html(valoresJaExistentes + linhaDaTabelaListaDeItems(valorDoInput));
    }
}


