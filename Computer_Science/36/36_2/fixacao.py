def fibo(n, prev1, prev2):
  if n == 1:
    return 0
  elif n == 2:
    return 1, fibo(n-1)


def backward(lst):
  if len(lst) == 1:
    return lst[0]
  elif len(lst) == 0:
    return 0
  return [lst[len(lst) - 1]] + [backward(lst[0: len(lst) - 1])]


def sum(n):
  if n == 1:
    return 1
  
  return n + sum(n-1)

print(sum(4))
  
