describe('search', () => {
    before('visit home page', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
    });
    it('search for shirt', () => {
        // Diferencial 1 - Buscar por shirt no menu superior e clicar no último resultado sugerido. Se possível, escute o retorno da requisição para saber o momento de clicar na interface;
        cy.intercept('GET', 'https://magento.softwaretestingboard.com/catalogsearch/searchTermsLog/save/*').as('catalogSearch')
        cy.get('#search').type('shirt')
        cy.get('#search').type('{enter}')
        cy.wait('@catalogSearch')
        cy.get('[data-ui-id="page-title-wrapper"]').should('have.text', "Search results for: 'shirt'")
        cy.get('#toolbar-amount').should('contain.text', 'Items')
        cy.get('li[class="item product product-item"]').last().click()
        cy.get('#tab-label-description').should('be.visible')
    });
});