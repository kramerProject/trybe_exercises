from abc import ABC, abstractmethod


class Figures(ABC):
  @abstractmethod
  def area(cls, data):
      raise NotImplementedError

  @abstractmethod   
  def perimeter(cls, data):
      raise NotImplementedError


class Square(Figures):
  def __init__(self, side):
    self.side = side

  def area(self):
        return self.side * self.side
  def perimeter(self):
        return 2 * self.side

class Rectangle(Figures):
  def __init__(self, base, height):
    self.base = base
    self.height = height

  def area(self):
        return self.base * self.height
  def perimeter(self):
        return 2 * self.base + 2 * self.height

class Circle(Figures):
  pi = 3.14
  def __init__(self, radio):
    self.radio = radio

  def area(self):
        return self.pi * self.radio * self.radio
  def perimeter(self):
        return 2 * self.pi * self.radio


sq = Square(2)
print(f'Area: {sq.area()} perimetro: {sq.perimeter()}')

rec = Rectangle(2, 4)
print(f'Area: {rec.area()} perimetro: {rec.perimeter()}')

circle = Circle(4)
print(f'Area: {circle.area()} perimetro: {circle.perimeter()}')