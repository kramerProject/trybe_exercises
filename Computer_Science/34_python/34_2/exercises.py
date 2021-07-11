import random
# ex1
# def inverted(name):
#   for item in range(len(name), 0, -1):
#     print(name[0: item])

# print(inverted("pedro"))

# ex3
def read_words():
  words = []
  file = open("words.txt", mode="r")
  content = file.readlines()
  for word in content:
    words.append(word)
    print(len(word))
  file.close()
  
  return words

# ex2
def scramble():
  randomWord = random.choice(read_words())
  scrambled_word = "".join(random.sample(randomWord, len(randomWord)))
  tries = 1

  while tries < 4:
    guess = input(f"Advinhe que palavra é {scrambled_word}:")
    if guess == randomWord:
      print("You got it")
      tries += 4
    else:
      print("You missed, try again")
      tries += 1

scramble()

