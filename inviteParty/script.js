function verificarEntrada() {
     nomeConvidado = document.getElementById('nome').value;
    convidadosMaicon = ['Carlos', 'Mateus','Anderson', 'Debora', 'Madeleine', 'Tatiane']
    if(convidadosMaicon.includes(nomeConvidado)){
        document.getElementById('permissaoEntrada').innerText= 'Liberado'
    } else{
        document.getElementById('permissaoEntrada').innerText= 'Você n ta na lista'
    }
}