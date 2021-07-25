class Television:
  def __init__(self, size):
    self.volume = 50
    self.channel = 1
    self.size = size
    self.turned_on = False
  
  def increase_volume(self):
    if self.volume == 99:
      self.volume = 99
    else:
      self.volume = self.volume + 1
    return self.volume

  def decrease_volume(self):
    if self.volume == 0:
      self.volume = 0
    else:
      self.volume = self.volume - 1
    return self.volume

  def modify_channel(self, channel):
    min = 1
    max = 99

    try:
      if channel > 1 and channel < 99:
        self.channel = channel
        return self.channel
      else:
        raise ValueError('Represents a hidden bug, do not catch this')
    except ValueError:
        return "out of bounds"

  def power_on_off(self):
    if self.turned_on == False:
      self.turned_on = True
    elif self.turned_on == False:
      self.turned_on = True
    return self.turned_on

myTv = Television(29)
print(myTv.power_on_off())
print(myTv.increase_volume())
print(myTv.decrease_volume())
print(myTv.modify_channel(100))
