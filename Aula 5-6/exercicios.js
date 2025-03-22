function media() {
    let nota1 = parseInt(document.getElementById("t_lab").value)
    let nota2 = parseInt(document.getElementById("av_sem").value)
    let nota3 = parseInt(document.getElementById("exame").value)

    media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10


    document.getElementById("nota_f").innerHTML = media



    if (0 < media && media <= 5) {

        resultado = "E"

    }
    else if (5 < media && media <=6) {

        resultado = "D"


    }
    else if (6 < media && media <=7) {

        resultado = "C";


    }
    else if (7 < media && media <= 8) {

        resultado = "B"
    }
    else if (8 < media && media <= 10){

        resultado = "A"

    }

    document.getElementById("conceito").innerHTML = resultado


}