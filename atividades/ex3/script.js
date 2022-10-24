function myFunction(){
    var nb1 = prompt("Digite o primeiro número")
    var nb2 = prompt("Digite o segundo número")
    if (parseInt (nb1) > parseInt(nb2)) {
        alert(`${nb1} é maior`)
    }else if(parseInt (nb1) < parseInt(nb2)) {
        alert(`${nb2} é maior `)
    }
    
}
