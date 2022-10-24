function calcula(){
var nomeAluno = document.getElementById('u-name').value;
var n1= parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var mediaAluno = document.getElementById('media');
mediaAluno = (n1+n2)/2
if (mediaAluno> 7){
    media.innerText =(`${nomeAluno} sua média é: ${mediaAluno} você está aprovado.`)
}else{
    media.innerText =(`${nomeAluno} sua média é: ${mediaAluno} você não atingiu a nota mínima, esta reprovado.`)
}


}


