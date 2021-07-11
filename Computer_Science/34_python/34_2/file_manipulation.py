# file = open("arquivo.txt", mode="w")  # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.
# # file = open("arquivo.txt", mode="w")

# file.write("nome idade\n")
# file.write("Maria 45\n")
# file.write("Miguel 33\n")

# print("Túlio 22", file=file)

# LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
# file.writelines(LINES)

arquivos = []
for index in range(10240):
    arquivos.append(open(f"arquivo{index}.txt", "w"))