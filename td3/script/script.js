const chk = document.getElementById('chk')
chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
}) 
$(document).ready(function() {
    $("#btn_add_item").click(function() { 
        var toAdd = $("input[name=checkListItem]").val();
        $('.list').append(`<tr>
        <td>${toAdd}</td>
        <td class="btn_remover_editar">
            <button type="button" id="js" onclick="botaoAtualizarItem(event)">
            <i class="fa-solid fa-pen" border="none"></i>
            </button>
            <button type="button"  onclick="botaoRemoverItem(event)">
            <i class="fa-solid fa-delete-left"></i>
            </button>
        </td>
    </tr>`);
    });
    $(document).on('click', '.item', function() {
        $(this).toggleClass("scratch");
    });
});

