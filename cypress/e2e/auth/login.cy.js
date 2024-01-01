describe('login', () => {
    it('login with success', () => {
        // the code of login is in commands file: cypress/support/commands.js 
        cy.login({ email: Cypress.env('USER_EMAIL'), password: Cypress.env('USER_PASSWORD'), name: Cypress.env('USER_NAME') })
    });
});