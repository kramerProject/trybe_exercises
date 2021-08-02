def count_even(n):
  if n < 0:
    return 0
  elif n % 2 == 0:
    return 1 + count_even(n-1)
  else:
    return 0 + count_even(n-1)

print(count_even(10))
