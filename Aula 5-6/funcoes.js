function repeat() {
    let num = parseInt(document.getElementById("Numero").value)
    for (let i = 0; i < num; i++){
            alert('Vc clicou enviar ' + num + ' vezes!')

    }
   
}
function soma() {
    let num1 = parseInt (document.getElementById("num1").value)
    let num2 = parseInt (document.getElementById("num2").value)

    let resultado_soma = num1 + num2

    document.getElementById("valor_soma").innerHTML = resultado_soma
}

function produto(){
    let num1 = parseInt (document.getElementById("num1").value)
    let num2 = parseInt (document.getElementById("num2").value)
    
    let resultado = 0
    if(num1 < 0 || num2 < 0){
        resultado = num1 + num2 
    }
        
    else{
        resultado = num1 * num2

    }
    document.getElementById("resultado").innerHTML = resultado
        

}




