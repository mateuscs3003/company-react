# Front-end em React.JS — Cadastro de empresas

Este é um projeto em React.js, feito com Javascript Vanilla, que integra com a API construída [neste repositório](https://github.com/mateuscs3003/company-ts), para que o usuário possa utilizar do sistema construído. Abaixo, seguirá as telas e as suas funções e também o porquê foram pensadas desse modo.

Para facilitar a navegação do usuário, há o texto "Home" no cabeçalho à direita que, sempre qque for clicado, voltará à página inicial da aplicação, facilitando a usabilidade.

## Páginas
### Home
![Home](https://tinypic.host/image/q0r2X)   ![Filtro](https://tinypic.host/image/q0PNe)

Esta é a página Home, que conta com a listagem de todos as empresas cadastradas no banco e mais abaixo um botão para visualização individual, onde estão outras funcionalidades assim que se clica no botão e direciona para uma nova página com o intuito de não poluir a página principal da aplicação. Clicando no botão à esquerda, você será direcionado para um formulário que poderá cadastrar uma nova empresa no banco.
Ao digitar um CNPJ completo e pesquisar, retornará somente o registro digitado. Caso não, a tela ficará em branco já que a tela não existe, voltando ao normal ao limpar a caixa de texto.

### Cadastrar
![Tela de cadastro](https://tinypic.host/image/q0PNe)

Na tela de cadastro, você digitará todos os dados corretamente conforme instruído nos inputs e então pode enviar ao banco de dados. Para que funcione corretamente, todos os dados devem ser colocados corretamente. Em caso de sucesso, você volta para a página home.

### Tela individual
![Visualização individual](https://tinypic.host/image/q0KK6)

Ao clicar no botão "Visualizar individual" no menu, você pode ver uma única empresa em específico com duas funcões: a de atualizar o cadastro e de deletar a empresa do banco de dados. Esta tela foi criada para poder ver os dados em uma tela separada e também não acumular funções para que o carregamento da página inicial seja mais rápido e, não obstante, tenha melhor usabilidade. Ao utilizar o botão para deletar o cadastro, você receberá um alerta dizendo que foi um sucesso e retornará à Home. Ao clicar para atualizar o cadastro, você será direcionado para um novo formulário.

#### Atualizar cadastro
![Tela de atualização](https://tinypic.host/image/q0ZXU)

Assim como a tela de cadastro, basta atualizar somente os campos que achará necessário, e então estará tudo feito e atualizado no banco de dados.