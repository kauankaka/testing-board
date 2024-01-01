# QA Developer Test - Coodesh
![Node](https://img.shields.io/badge/Node-v14.17.3-brightgreen) ![npm](https://img.shields.io/badge/npm-v6.14.13-green) ![Static Badge](https://img.shields.io/badge/RandomUser-v1.4.0-yellowgreen)
 ![Cypress](https://img.shields.io/badge/Cypress-v13.6.2-blue)

Nesta etapa foi desenvolvido um teste automatizado usando o framework Cypress, node.js, e a api randomuser.me para realização do desafio proposto pela Coodesh, cumprindo os critérios obrigatórios e diferenciais.

## 👩‍💻 Casos de uso:
- ✔️ Registro
- ✔️ Login
- ✔️ Home
- ✔️ Adicionar produtos no carrinho
- ✔️ Buscar produtos
- ✔️ Adicionar comentários em produtos
- ✔️ Realizar Checkout

🎯 Diferenciais:
- ✔️ **Diferencial 1** - Buscar por `shirt` no menu superior e clicar no último resultado sugerido. Se possível, escute o retorno da requisição para saber o momento de clicar na interface;
- ✔️ **Diferencial 2** - Criar uma conta na tela de Login/Cadastro;
- ✔️ **Diferencial 3** - Adicionar um produto **aleatório** do catalogo de moda masculina no carrinho;
- ✔️ **Diferencial 4** - Adicionar comentário em um produto **aleatório** do catálogo de moda masculina no carrinho;
- ✔️ **Diferencial 5** - Gerar um relatório automático do teste.


## 🔧 Instalação
 Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.
 
### Pré requisito: 

  - GIT & Node versão 14.17.3 ou superior (Priorize versões LTS)

Com o Node instalado execute os seguintes comandos:

```bash
# clonar repositório
git clone https://github.com/kauankaka/testing-board.git

# entrar na pasta do projeto qa-test-template
cd testing-board
  
# instalar dependências
npm install

## 📝 Notas Adicionais

- O arquivo cypress.env.json.example do projeto deve ser renomeado para cypress.env.json
- Dentro desse arquivo cypress.env.json deve-se adicionar as credenciais para login de uma conta existente no site, por exemplo:
  ```bash
  {
    "USER_EMAIL": "",
    "USER_PASSWORD": "",
    "USER_NAME": "",
  }
  ```

## 🧪 Executando os testes
```bash
# abrir interface gráfica do cypress
npm run e2e:open # or npx cypress open

# executar o projeto em modo handles
npm run e2e:run # or npx cypress run
```

## 🛠️ Construído com as Tecnologias

* [![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)](https://docs.cypress.io/guides/overview/why-cypress) - Framework de teste
* [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/docs/) - Desenvolvimento BackEnd em tempo de execução para Javascript.


## ✒️ Autor

* **QA** - *Codificação e Documentação* - [Desenvolvedor de Teste](https://github.com/kauankaka)

## 🎁 Expressões de gratidão

* Grato a Coodesh pelo oportunidade de mostrar um pouco do meu trabalho e conhecimento 📢;

---
Por [Kauan Almeida](https://github.com/kauankaka) 😊
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kauan-almeida-18674121b/)

>  This is a challenge by [Coodesh](https://coodesh.com/)
