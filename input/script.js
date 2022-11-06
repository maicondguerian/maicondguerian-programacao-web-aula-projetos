function somar(){
    var a = document.querySelector("#txtn1").value;
    var b = document.querySelector("#txtn2").value;
    var s = Number(a) + Number(b);
    var res = document.querySelector("#res").innerHTML = `A soma entre ${a} e ${b} é: <strong>${s}</strong>`;
}
 


//  function somar() {
//    var a = document.querySelector("#txtn1");
//    var b = document.querySelector("#txtn2");
//    var n1 = Number.parseInt(a.value);
//    var n2 = Number.parseInt(b.value);
//    var s = n1 + n2;
//    var res = document.querySelector("#res").innerHTML = `A soma entre ${n1} e ${n2} é: <strong>${s}</strong>`;
//  }

 const reset_inputs = document.querySelector("#reset").addEventListener("click", () => {
    document.getElementById("txtn1").value=""
    document.getElementById("txtn2").value=""
    res.innerHTML=`Resultado <img src="loading-gif.gif" width="20px" alt="" />`
    
    
   });