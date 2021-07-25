class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password
    def reset_password(self):
        print("Envia email de reset de senha")
        return self.name

meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
print(meu_user)
print(meu_user.name)
print(meu_user.email)
print(meu_user.password)
print(meu_user.reset_password())