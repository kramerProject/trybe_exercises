def max_number(max, lst):
  if len(lst) == 0:
    return max
  if lst[0] > max:
    print(lst[0])
    return max_number(lst[0], lst[1: len(lst)])
  return max


print(max_number(0, [1, 3, 4, 6, 2]))