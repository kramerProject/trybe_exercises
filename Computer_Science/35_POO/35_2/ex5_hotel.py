
class Room:
  def __init__(self, number, floor, capacity, price):
    self.number = number
    self.floor = floor
    self.capacity = capacity
    self.price = price
    self.reserved = False
  
  def reserve_room(self):
    self.reserved = True
    return self.reserved
  def free_room(self):
    self.reserved = False
    return self.reserved


class Guest:
  def __init__(self, name, cpf):
    self.name = name
    self.cpf = cpf

class Book:
  def __init__(self, room, guest):
    self.room = room
    self.guest = guest

class Hotel:
  def __init__(self, name, rooms):
    self.name = name
    self.rooms = rooms
    self.books = []
  
  def check_in(self, guests):
    avaiable = self.avaiable_room(len(guests))
    try:

      if len(avaiable) > 0:
        room = avaiable[0]
        room.reserve_room()
        for guest in guests:
          book = Book(room.number, guest.name)
          self.books.append(book)
        return f'Quarto {room.number} esta reservado'
      else:
        raise IndexError
    except IndexError:
      return 'não há quartos disponíveis'


  def check_out(self, room):
    room.free_room()
    return 'O quarto: {room.number} está liberado'

  def avaiable_room(self, search):
    # avaiable = [item.capacity > search and item.reserved == false for item in self.rooms]
    return self.rooms

# rooms
number1 = Room(1, 1, 1, 100)
number2 = Room(2, 2, 2, 200)
number3 = Room(3, 3, 3, 300)

# guests
kramer = Guest('kramer', 123)
ana = Guest('ana', 456)

# hotel
hilton = Hotel('hilton', [number1, number2, number3])

print(number1.number)
print(hilton.check_in([kramer, ana]))
print(hilton.books)
for book in hilton.books:
  print(book.guest)
  print(book.room)

