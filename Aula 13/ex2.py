texto = input("Digite um texto")
texto_convertido = ''

for letra in texto:
    if ord(letra) in range (65, 91):
        texto_convertido += letra
    elif ord(letra) in range (97, 123):
        texto_convertido += chr(ord(letra) - 32)
    else:
        texto_convertido += ''
if texto_convertido == texto_convertido[::-1]:
    print("é palindromo")