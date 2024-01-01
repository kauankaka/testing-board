// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
    'login',
    (
        user = {
            email: null,
            password: null,
            name: null,
        },

        { cacheSession = true } = {}
    ) => {
        const login = () => {
            cy.visit('https://magento.softwaretestingboard.com/customer/account/login');
            cy.get('[data-ui-id="page-title-wrapper"]').should('be.visible')
            cy.get('#email').type(user.email)
            cy.get('#pass').type(user.password)
            cy.get('#send2').click()
            cy.get('.logged-in').should('contain.text', user.name)
        };

        const validate = () => {
            cy.visit('https://magento.softwaretestingboard.com/customer/account/');
            cy.location('pathname', { timeout: 2000 }).should('not.contain', '/customer/account/login');
        }

        const options = {
            cacheAcrossSpecs: true,
            validate
        };

        if (cacheSession) {
            cy.session(user, login, options);
        } else {
            login();
        }

    },
);