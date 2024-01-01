describe('home page', () => {
    it('load with success', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('a.logo').should('be.visible')
        cy.get('a.logo').should('have.attr', 'aria-label', 'store logo')
    });
});