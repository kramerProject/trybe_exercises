import math

def max(x,y):
  if (x > y):
    return x
  elif (x < y):
    return y
  else:
    return "Numbers are equal"
    
def meanNumber(lst):
  return sum(lst) / len(lst)

def square(x):
  n = 0
  if (x > 1):
    while (n < x):
      print(x * "*")
      n += 1
  else:
    return ""

def biggestName(names):
  biggest = ""
  for i in range(0, len(names)):
    if (i == 0):
      biggest = names[i]
    elif (len(names[i]) > len(biggest)):
      biggest = names[i]
  return biggest

def painting(meters):
  liters = meters / 3
  cans = liters / 18
  totalPrice = math.ceil(cans) * 80
  res = (math.ceil(cans), totalPrice)
  return res


def triangle(x, y, z):
  isTriangle = ((x + y) > z) and ((x + z) > y) and ((y + z) > x)
  if isTriangle:
    if ( x == y == z):
      return "Equilatero"
    elif (x == y or x == z or y == z):
      return "Isósceles"
    else:
      return "Escaleno"
  return "not a triangle"








#ex1
print('ex1 ----')
print(max(3,2))

#ex2
print('ex2 ----')
numbers = [1, 3]
print(meanNumber(numbers))

#ex3
print('ex3 ----')
print(square(5))

#ex4
print('ex4 ----')
names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
print(biggestName(names))

#ex5
print('ex5 ----')
print(painting(108))

#ex6
print('ex5 ----')
print(triangle(3,4,5))