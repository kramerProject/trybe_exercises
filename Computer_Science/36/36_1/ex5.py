
import random

print(random.randint(1, 100))
def generate_numbers():
  numbers = []

  for  i in range(0, 100):
    sum = 0
    for n in range(0, 10):
      sum += random.randint(1, 1000)
    numbers.append(sum / 10)
  return numbers


print(generate_numbers())

# complexidade o(n^10)
