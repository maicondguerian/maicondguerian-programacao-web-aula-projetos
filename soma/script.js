 //declaração e atribuições de variavéis
 let somar_js = document.getElementById("somar_js").addEventListener("click", () => {//seleciona e cria uma função de click para o botão somar js
    let v1 = document.getElementById("first_value").value //Declara e armazena o value do elemento(first_value) input em uma variavel
    let v2 = document.getElementById("second_value").value //Declara e armazena o value do elemento(second_value) input em uma variavel
    let pic_error = document.getElementById("img") //declara e armazena a "img" do doom em uma variavel para ser inserida via js
    let error_alert = document.getElementById("error_alert")//declara e armazena um "texto de erro" do doom em uma variavel para ser inserida via js

    if (first_value.value != "" && second_value.value != "") { //verifica se o value do input é diferente de vazio
        soma = parseFloat(v1) + parseFloat(v2) //calculo de adição js puro
        let res = document.getElementById("res").value = soma
        let result = document.getElementById("result").innerHTML += soma // imprime o resultado dentro no visor span rsult
    } else {
        error_alert.innerHTML = "*Erro! Preencha os campos antes de começar"
        pic_error.innerHTML = "<img src='error.gif'>"
    }
    let valor_do_attributo = document.getElementById("somar_js").getAttribute('value')
    document.getElementById('operador_cal').innerHTML = valor_do_attributo
    
  //limpa os campos de imput e erros
let rst_inputs = document.getElementById("reset_inputs").addEventListener("click", () => {
    first_value.value = ""
    second_value.value = ""
    res.value = ""
    img.innerHTML = ""
    visor1.innerHTML = "v1"
    visor2.innerHTML = "v2"
    error_alert.innerHTML = ""
    result.innerHTML = "="
    operador_cal.innerHTML = ""
    first_value.focus();
})

})
    //soma em JQ
$("#somar_jq").click(() => {
    let v1 = $("#first_value").val()
    let v2 = $("#second_value").val()
    if (first_value.value == "" && second_value.value == "") {
        alert("Erro!Preencha os campos antes de começar ")
    } else {
    }
    soma = parseInt(v1) + parseInt(v2)
    $("#res").val(soma)
    $("#reset_inputs").click(() => {
        v1 = $("#first_value").val("")
        v2 = $("#second_value").val("")
        res = $("#res").val("")
    })
})
    //mutiplicação em JQ
$("#mutiplicar_jq").click(() => {
    let v1 = $("#first_value").val()
    let v2 = $("#second_value").val()
    soma = parseInt(v1) * parseInt(v2)
    $("#res").val(soma)


})
//divisão em JQ
$("#dividir_jq").click(() => {
    let v1 = $("#first_value").val()
    let v2 = $("#second_value").val()
    soma = parseInt(v1) / parseInt(v2)
    $("#res").val(soma)
})


function change_number_nb1() {
    let visor_v1 = document.getElementById("visor1").innerHTML = (first_value).value //imprime o valor digitado no visor v1
}

function change_number_nb2() {
    let visor_v2 = document.getElementById("visor2").innerHTML = (second_value).value //imprime o valor digitado no visor v2
}

const chk = document.getElementById('chk') //mudar tema
chk.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    
    const all = document.querySelectorAll('span')
    for(i=0;i<=5; i++){
        all[i].classList.toggle('yellow')
    }

    const input_c = document.querySelectorAll('input')
    input_c[1].classList.toggle('darkk')
    input_c[2].classList.toggle('darkk')
    input_c[3].classList.toggle('darkk')
    
    const txt_white = document.querySelectorAll('label')
    console.log(document.querySelectorAll('label'))
    txt_white[1].classList.toggle('white')
    txt_white[2].classList.toggle('white')
    txt_white[3].classList.toggle('white')
    
})  
