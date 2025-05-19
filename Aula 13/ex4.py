nome_arquivo = input("Digite o nome do arquivo: ")

with open (f'{nome_arquivo}.txt', 'r') as arquivo:
    conteudo = arquivo.read()

palavras = conteudo.split()

palavras = [palavra.strip(',.!?\'"').lower() for palavra in palavras]
print(palavras)

frequencia = {}
for palavra in palavras:
    if palavra in frequencia:
        frequencia[palavra] += 1
    else:
        frequencia[palavra] = 1

maior_frequencia = max(frequencia.values())
palavras_mais_frequentes = []
for palavra, freq in frequencia.items():
    if freq == maior_frequencia:
        palavras_mais_frequentes.append(palavra)
print(f"A palavra mais frequente é: {','.join(palavras_mais_frequentes)}")