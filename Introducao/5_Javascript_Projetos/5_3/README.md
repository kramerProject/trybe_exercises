# Introdução ao desenvolvimento web / bloco 5 / dia 3

# Parte I

# Exercício 1 - Mad Libs

- Start with this webpage, which has several input elements and a button:

```
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title></title>
 </head>
 <body>
 
 <h1>Mad Libs</h1>
 
 <ul>
  <li>Noun: <input type="text" id="noun">
  <li>Adjective: <input type="text" id="adjective">
  <li>Someone's Name: <input type="text" id="person">
 </ul>
 
 <button id="lib-button">Lib it!</button>
  
 <div id="story"></div>
  
 </body>
</html>

```

- Add a script tag to the bottom of the page for your code.

- Add an event listener to the button so that it calls a makeMadLib function when clicked.

- In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.

###

# Exercício 2 - Calculator

- Start with this webpage, which has inputs and buttons for things to calculate:

```

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Calculator</title>
</head>
<body>

  <label>Square this number:
    <input type="number" id="square-input" size="2">
  </label>
  <button id="square-button">Calculate</button>
  <br><br>
  
  <label>Half this number:
    <input type="number" id="half-input" size="2">
  </label>
  <button id="half-button">Calculate</button>
  <br><br>
  
  <label>
    Fraction:
    <input type="number" id="percent1-input" size="2">
  </label>
  <label>
    Whole:
    <input type="number" id="percent2-input" size="2">
  </label>
  <button id="percent-button">Calculate</button>
  <br><br>
  
  <label>Calculate area of circle with radius:
    <input type="number" id="area-input" size="2">
  </label>
  <button id="area-button">Calculate</button> 
  <br><br>
  <div id="solution"></div>

  
</body>
</html>

```
- Add a script tag, and add the functions from the calculator exercise (view the solution if you haven't done it yet).

- For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.

- Bonus: respond to key presses so that the user doesn't have to click the button.

###

# Parte II

Para os próximos exercícios, você deve abrir um novo arquivo HTML no VSCode, copiar o código abaixo para dentro do arquivo, e então seguir as instruções da página.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercício - Parte 2</title>
    <!-- Seu código JavaScript pode vir aqui -->
    <!-- Seu código JavaScript pode vir aqui -->
    <!-- Seu código JavaScript pode vir aqui -->
  </head>
  <body>
    <div>
      <h1>Exercício - Parte 2</h1>
      <hr />
      <h2>Tarefa 1</h2>
      <p>
        Adicione um botão HTML na área indicada abaixo. Usando um
        <strong>EventListener</strong> adicione um evento ao botão, onde ao ser
        clicado um alerta contendo a mensagem "Você clicou no botão" deverá ser
        exibido.
      </p>
      <div class="tarefa1">Adicione o botão aqui!</div>
      <hr />
      <h2>Tarefa 2</h2>
      <p>
        Para realizar essa tarefa utilize à tag &lt;script&gt; abaixo. Você deve
        declarar duas variáveis, uma chamada <strong>productPrice</strong> com o
        valor <strong>59,99</strong> e a outra chamada
        <strong>discount</strong> com o valor <strong>0,30</strong>. Na
        sequência adicione um botão um botão HTML abaixo da tag &lt;script&gt; e
        utilizando um <strong>EventListener</strong> adicione um evento a esse
        botão, onde ao ser clicado deve-se multiplicar
        <strong>productPrice</strong> por <strong>discount</strong> e então
        exibir um alerta contendo a mensagem "Desconto de R$(resultado)", sendo
        <strong>discount</strong> o resultado da multiplicação.
      </p>
      <script language="javascript" type="text/javascript">
        //JavaScript para a tarefa 2
        //JavaScript para a tarefa 2
        //JavaScript para a tarefa 2
      </script>
      <hr />
      <h2>Bônus</h2>
      <p>
        Para essa última tarefa você irá precisar de duas imagens do mesmo
        tamanho. Adicione uma imagem a está página usando uma tag HTML &lt;img
        /&gt;. Usando os manipuladores de eventos
        <strong>onMouseOver()</strong> e <strong>onMouseLeave()</strong>, faça com
        que a imagem mude para a segunda imagem quando o ponteiro do mouse
        passar sobre ela e, em seguida, voltar para a primeira imagem quando o
        ponteiro do mouse for movido para fora da imagem.
      </p>
      <p>
        Além disso, sempre que um dos eventos for realizado deve-se logar no
        console qual dos eventos acabou de ocorrer.
      </p>
      <!-- Adicione a tag <img /> aqui -->
    </div>
  </body>
</html>

```
###

# Parte III

# Exercício 5 - The Cat Walk

- Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

```

<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>Cat Walk</title>
 </head>
 <body>
  
  <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
  
 </body>
</html>

```

- Add a script tag at the bottom of the page, where you'll put all your code.

- Create a variable to store a reference to the img.

- Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

- Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

- Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

# - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever

# - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever

# - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

###

# Parte IV

Neste exercício, você vai praticar a leitura e a interpretação de código HTML, CSS e JavaScript. 🙂
No link abaixo, está um trecho de código do CodePen, no qual já existe:

- A estrutura do código em HTML;
- A estilização da página com o CSS;
- Funções JavaScript para adicionar comportamentos à pagina.

Seu trabalho é adicionar o evento correto a cada um dos três elementos button da página e um evento ao elemento input, de forma que a função mais apropriada definida no JavaScript seja acionada quando quem usa interagir com cada elemento, clicando ou digitando, por exemplo.

Já existem quatro funções JavaScript definidas:

- goDark();
- complainMessage();
- finishTheStory();
- typeAndScream().

Dicas:

- Não é necessário mas se quiser pode alterar o CSS da página;
- Coloque seu fone de ouvido enquanto estiver resolvendo este exercício (percebeu a tag audio no HTML?)!
- Evento do JavaScript que ocorre ao digitar algo em um input
Você pode ficar à vontade para fazer o exercício diretamente no CodePen, mas recomendamos que copie o código no seu arquivo correspondente ao exercício. Assim, você vai conseguir enviá-lo ao seu repositório no GitHub. 😉

_[Exercício 6: Conectando as pontas.](https://codepen.io/prosetech/pen/oRxMmZ)_