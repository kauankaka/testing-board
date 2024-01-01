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

## ❓ Porquê Cypress ?

Escolher o  Cypress sobre outros frameworks de teste depende de vários fatores e objetivos específicos do projeto. Segue alguns motivos pelos quais escolhi o Cypress:
- Sincronização Automática: Cypress aguarda automaticamente por elementos serem encontráveis, comandos serem concluídos e outras ações necessárias antes de prosseguir com o teste. Isso reduz a necessidade de adicionar esperas ou sleeps arbitrários, tornando os testes menos frágeis.

- Interface Interativa: Cypress oferece uma interface de usuário robusta para desenvolvimento de testes. Isso permite visualizar os testes enquanto são executados, inspecionar o estado do aplicativo, viajar no tempo para ver cada comando executado e muito mais.

- Arquitetura baseada em JavaScript: Como Cypress é construído inteiramente em JavaScript e executa no mesmo loop de execução que a aplicação, ele se alinha bem com equipes que já estão usando JavaScript e Node.js.

- Debugging Simplificado: Cypress torna o processo de depuração mais fácil, fornecendo snapshots e vídeos dos testes, além de permitir a depuração diretamente do Chrome DevTools.

Além do Cypress, outro framework de teste bastante popular e considerado um dos melhores atualmente é o Selenium. Explorando o Selenium é possível notar fácilmente suas vantagens, bem como vou mencionar brevemente outras alternativas notáveis:


Selenium
- Selenium é um dos frameworks de automação de testes mais antigos e amplamente utilizados para aplicações web. Suas principais vantagens incluem:

- Compatibilidade com Navegadores: Selenium suporta uma ampla gama de navegadores, incluindo Chrome, Firefox, Safari, Internet Explorer e Edge, o que o torna ideal para testes cross-browser.

- Linguagens de Programação: Diferente do Cypress, que é JavaScript-only, o Selenium suporta várias linguagens de programação, incluindo Java, C#, Python, Ruby, e outras, permitindo que equipes utilizem a linguagem com a qual estão mais confortáveis.

- Comunidade e Suporte: Sendo um dos frameworks mais antigos, possui uma comunidade grande e ativa, o que significa muitos recursos, bibliotecas de terceiros, plug-ins e documentação extensa.

Outras Alternativas Notáveis
- Playwright: Desenvolvido pela Microsoft, é uma ferramenta relativamente nova que permite testar aplicações web em todos os navegadores modernos. Ele suporta testes multi-navegadores, incluindo Chrome, Firefox, e Safari, tanto em desktop quanto em dispositivos móveis. Playwright é elogiado por sua capacidade de trabalhar com aplicações modernas, suportando SPA, SSR, e outras tecnologias web complexas.

- Puppeteer: Focado no Chrome e no Chromium, é uma ferramenta do Google para automação de navegador. É frequentemente usada para scraping de dados, testes automatizados, e geração de screenshots e PDFs de páginas web. Embora seja menos flexível em termos de suporte a navegadores comparado ao Selenium, é uma ferramenta poderosa para testes específicos do Chrome.

- WebDriverIO: É um framework de automação de testes para JavaScript que é construído sobre o Selenium WebDriver. Combina a facilidade de uso do Cypress com a potência e abrangência do Selenium, oferecendo suporte para vários navegadores e uma sintaxe fácil de usar.


## ✒️ Autor

* **QA** - *Codificação e Documentação* - [Desenvolvedor de Teste](https://github.com/kauankaka)

## 🎁 Expressões de gratidão

* Grato a Coodesh pelo oportunidade de mostrar um pouco do meu trabalho e conhecimento 📢;

---
Por [Kauan Almeida](https://github.com/kauankaka) 😊
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kauan-almeida-18674121b/)

>  This is a challenge by [Coodesh](https://coodesh.com/)
