# Desenvolvimento Back ENd / bloco 27 / dia 1

 ## Agora, a prática

Crie uma aplicação que permita criar, visualizar, editar e deletar usuários. Sua aplicação deve utilizar camada de model que você aprendeu a desenvolver hoje, juntamente com a conexão ao banco de dados MySQL . Além disso a aplicação deve conter os seguintes endpoints:

1. POST /user - Cria um usuário no banco com os seguintes dados:

   - id : Id única gerada automaticamente pelo banco;

   - first_name : Nome do usuário (string obrigatória);

   - last_name : Sobrenome do usuário (string obrigatória);

   - email : Email do usuário (string obrigatória);

   - password : Senha do usuário (string com pelos menos 6 caracteres obrigatória);

   - O endpoint deve retornar um JSON com a mensagem Usuário criado com sucesso , juntamente com o status 201 ;

   - Caso os dados não estejam de acordo com as regras de negócio o endpoint deve retornar um objeto com a mensagem Dados inválidos juntamente com o status 200 .

2. GET /user - Retorna um array com todos os usuários cadastrados no banco de dados, sendo cada usuário um objeto diferente. Além disso o endpoint deve retornar também o status 200 .

3. GET /user/:id - Retorna o objeto do usuário cujo id seja igual ao parâmetro id informado na URL. Além disso o endpoint deve retornar também o status 200 .

    - Caso não exista um usuário com id informado o endpoint deve retornar um JSON com mensagem Usuário não encontrado , juntamente com o status 404 .

  4. PUT /user/:id - Edita informações do usuário cujo id seja igual ao parâmetro id informado na URL.

    - O endpoint deve retornar um JSON com a mensagem Usuário editado com sucesso , juntamente com o status 200 ;
    Caso os dados não estejam de acordo com as regras de negócio o endpoint deve retornar um objeto com a mensagem Dados inválidos juntamente com o status 200 .

  5. DELETE /user/:id - Deleta o usuário cujo id seja igual ao parâmetro id informado na URL.

    - Endpoint deve retornar um objeto com a mensagem Usuário deletado com sucesso , juntamente com o status 200 .

Execute o script SQL abaixo para criar o banco e a tabela que você utilizará para resolver o exercício proposto. 

```
CREATE DATABASE IF NOT EXISTS users_crud;

USE users_crud;

CREATE TABLE users (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
email VARCHAR(30) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
);

```