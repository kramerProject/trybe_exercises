# my_name = str(input("Digite seu nome: "))

# for letter in my_name:
#   print(letter)

numbers = input("Digite uma sequencia de numeros seperados por espaço:")
array = numbers.split()
sum = 0

for number in array:
  if number.isdigit():
    sum += int(number)
  else:
    print(f"erro ao carregar")

print(sum)

  