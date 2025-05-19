palavra = input("Digite uma palavra: ")

texto_retornado = ''
for letra in palavra:
    if letra in "aeiou":
        texto_retornado += letra.upper()
    else:
        texto_retornado += letra

print(texto_retornado)