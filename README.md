<h1 align="center">
  Aluraframe - JAVASCRIPT POO
</h1>

### Índice

* [:pencil: Descrição do Projeto](#pencil-descrição-do-projeto)
* [:white_circle: Status do Projeto](#white_circle-status-do-projeto)
* [:hammer: Funcionalidades e Demonstração da Aplicação](#hammer-funcionalidades-e-demonstração-da-aplicação)
* [:open_file_folder: Acesso ao Projeto](#open_file_folder-acesso-ao-projeto)
* [:rocket: Abrir e rodar o projeto](#rocket-abrir-e-rodar-o-projeto)
* [:keyboard: Tecnologias utilizadas](#keyboard-tecnologias-utilizadas)
* [:woman_technologist: Desenvolvedor(a) do Projeto](#woman_technologist-desenvolvedora-do-projeto)

</br>

## :pencil: Descrição do Projeto
O projeto **[Aluraframe](https://nayarawatanuki.github.io/javascript__aluraframe/)**, é uma simples proposta de cadastros de negociações, contruída em `html`, `css` e `javascript`. 
Esse projeto contém o objetivo de aprender a manipular atributos e funções, aplicando boas práticas com `javascript`. 
</br>Desenvolvido para o curso de **JAVASCRIPT: CONHECENDO O BROWSER E PADRÕES DE PROJETO** da plataforma [Alura](https://www.alura.com.br/).

</br>

## :white_circle: Status do Projeto
> Projeto concluído :white_check_mark:

</br>

## :hammer: Funcionalidades e Demonstração da Aplicação
A construção/estrutura da página foi pensada e focada mais na parte de `javascript` com funcionalidades e elementos dinâmicos, logo o projeto já foi iniciado com `html` e `css` prontos.

</br>

**Foi aprendido e utilizado:** 

  - Estrutura MVC:
    - M (modelo), abstração do mundo real, os dados da aplicação e suas regras de negócio;
      - O padrão MVC permite que alterações de layout na view não acarretem alterações no modelo.
    - V (view), representação do modelo em alguma tecnologia, por exemplo, HTML;
      - A view apresenta um modelo em uma tabela, em um formulário ou em parágrafos, e o padrão MVC permite que qualquer alteração na view não interfira com o modelo.
    - C (controller), aquele que disponibiliza um modelo para a view.
      - O controller é aquele que recebe as ações do usuário e que sabe interagir com o modelo. Como o modelo é independente da view, esta precisa ser renderizada para que reflita as alterações no modelo. Em suma, o controller é a ponte de ligação entre a view e o modelo.
    
    - organização de pastas;
    - padrões de arquivos;

 - Performance:
   - Construtores evitam que o código percorra o DOM 
   - `.bind()`, indica que a função/método ainda pertence ao objeto inicial (this);
   - Herança pela propriedade `extends`;
  
 - Formatação de date;

 - Segurança (programação defensiva):
   - evitar que dados já criados possam ser alterados pelo código, no caso a lista de negociações
      - invés do get retornar apenas a lista `this._negotiations`, ele retorna `[].concat(this._negotiations)`. Ou seja uma cópia da lista.

 - Alterando dinamicamente um objeto:
    - template dinâmico com a função `map()` (tabela).

</br>

## :open_file_folder: Acesso ao projeto
Caso tenha interesse em visualizar o que foi realizado: [Aluraframe](https://nayarawatanuki.github.io/javascript__aluraframe/) 

Ou, caso prefira baixá-lo clicando [aqui](https://github.com/nayarawatanuki/javascript__aluraframe/archive/refs/heads/main.zip).

</br>

## :rocket: Abrir e rodar o projeto
Baixe o projeto clicando [aqui](https://github.com/nayarawatanuki/javascript__aluraframe/archive/refs/heads/main.zip).

> Após baixar o projeto, abra a pasta do projeto (Caso o projeto seja baixado em zip, é necessário extraí-lo antes de abrir), então clique no:
> - Aqruivo **``index.html``**
> - O projeto abrirá em seu navegador padrão (aconselho configurar para o Chrome, se possível)

</br>

## :keyboard: Tecnologias utilizadas
![HTML, CSS e JS](https://raw.githubusercontent.com/nayarawatanuki/javascript__aluraframe/main/src/assets/img/readme/html-css-js.PNG)</br>

</br>

## :woman_technologist: Desenvolvedor(a) do Projeto
:star: [Nayara Watanuki](https://github.com/nayarawatanuki)
