describe('register', () => {
    before('visit create account page', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create')
    });
    it('create a account', () => {
        // Diferencial 2 - Criar uma conta na tela de Login/Cadastro.
        
        // GET in ramdomuser api for account creation
        cy.request('GET', 'https://randomuser.me/api/?password=special,upper,lower,8-12').as('createUser').then((response) => {
            const data = response.body.results[0]

            // fill and submit form
            cy.get('#firstname').type(data.name.first)
            cy.get('#lastname').type(data.name.last)
            cy.get('#email_address').type(data.email)
            cy.get('#password').type(data.login.password)
            cy.get('#password-confirmation').type(data.login.password)
            cy.get('.action.submit.primary').click()

            // confirm success of account creation
            cy.get('[data-ui-id="message-success"]').should('be.visible')
            cy.get('.block-dashboard-info .box-content').should('contain.text', data.email)
        }) 
    });
});