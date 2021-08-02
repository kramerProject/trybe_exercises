def mdc(x, y):
  if (x % 2 == 0) and (y % 2 == 0):
    print(f'x: {x} y:{y}')
    return 2 + mdc(x/2, y/2)
  else:
    return 0

print(mdc(36, 16))