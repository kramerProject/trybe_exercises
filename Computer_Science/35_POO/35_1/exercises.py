# Ex1 - Mensagem : Forma com que objetos interagem - chamando funções uns dos outros. Um chamado como esse é um envio de mensagem a outro objeto. "User, resete sua senha!"

# ex 2
class Rectangle:
  def __init__(self, base, height):
    self.base = base
    self.height = height
  def calculate_area(self):
    return self.base * self.height
  def perimeter(self):
    return 2 * self.base + 2* self.height

# ex 3
class Circle:
  def __init__(self, radio):
    self.radio = radio
  def calculate_area(self):
    return 3.14 * self.radio * self.radio

# ex 4
class Order:
  def __init__(self, items):
    self.items = items

  def total_price(self):
    total = 0
    for item in self.items:
      total += item.price
    return total

class Product:
  def __init__(self, name, price):
    self.name = name
    self.price = price

  def get_price(self):
    return self.price

# ex 5
class Television:
  def __init__(self, brand, volume_rate):
    self.state = False
    self.brand = brand
    self.volume_rate = volume_rate

  def turn_on(self):
    self.state = True

  def turn_off(self):
    self.state = False
    
  def increase_volume(self, number):
    return number * self.volume_rate


tv1 = Television("sharp", 1)
tv2 = Television("lg", 2)

print(tv1.increase_volume(2))
print(tv2.increase_volume(2))

