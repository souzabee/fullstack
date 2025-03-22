nome = prompt("Qual seu nome?")
nascimento = parseInt(prompt("Qual seu ano de nascimento?"))
atual = parseInt(prompt("Qual o ano atual?"))

idade = atual - nascimento
document.getElementById("valor_idade").innerHTML = 'EU, ' + nome + ', tenho' + idade + 'anos!'

