def count_even(n):
  count_even = 0
  for number in range(0, n + 1 ):
    if number % 2 == 0:
      count_even += 1
  return count_even

print(count_even(11))