with open ('texto.txt', 'r') as arquivo:
    conteudo = arquivo.read()

palavras = conteudo.split()

palavras = [palavra.strip(',.!?\'"') for palavra in palavras]
print(palavras)

tamanho_palavras = [len(palavra) for palavra in palavras]
maior_tamanho = max(tamanho_palavras)

maiores_palavras = []
for palavra in palavras:
    if len(palavra) == maior_tamanho:
        maiores_palavras.append(palavra)
print(f"As palavras mais longas tem {maior_tamanho} letras: {', '.join(maiores_palavras)}")
