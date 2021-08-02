def is_prime(counter, divisor, n):
  if n >= divisor and n % divisor == 0:
    return is_prime(counter + 1, divisor + 1, n)
  elif n >= divisor and n % divisor != 0:
    return is_prime(counter, divisor + 1, n)
  elif counter == 1 and divisor > n:
    return 'is prime'
  else:
    return 'not prime'

print(is_prime(0, 2, 15))

