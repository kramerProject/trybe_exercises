import statistics

class Stats:
  def __init__(self, numbers):
    self.numbers = numbers
  def calc_average(self):
    return statistics.mean(self.numbers)
  def calc_median(self):
    return statistics.median(self.numbers)
  def calc_mode(self):
    return statistics.mode(self.numbers)
  

myNumbers = Stats([1,1, 2, 2, 2,3,4,5,])
print(myNumbers.calc_average())
print(myNumbers.calc_median())
print(myNumbers.calc_mode())