import { addItemInCart } from './index'

describe('cart', () => {
    beforeEach("visit the men's catalog page and click on an item", () => {
        cy.visit('https://magento.softwaretestingboard.com/men/tops-men.html')
        cy.get('li[class="item product product-item"]').first().click()
    });
    it('add item in cart', () => {
        // Diferencial 3 - Adicionar um produto aleatório do catalogo de moda masculina no carrinho;
        addItemInCart()
    });
    it('add comments to cart item', () => {
        addItemInCart()

        // Diferencial 4 - Adicionar comentário em um produto aleatório do catálogo de moda masculina no carrinho;
        cy.get('#tab-label-reviews-title').click()
        cy.get('#Rating_5').check({force: true})
        cy.get('#nickname_field').clear()
        cy.wait(1000)
        cy.get('#nickname_field').type('Nome Teste')
        cy.wait(1000)
        cy.get('#nickname_field').type('{enter}')
        cy.get('#summary_field').clear()
        cy.get('#summary_field').type('Descrição Teste')
        cy.get('#summary_field').type('{enter}')
        cy.get('#review_field').clear()
        cy.get('#review_field').type('Review Teste')
        cy.get('#review_field').type('{enter}')
        cy.get('.review-form-actions button[type="submit"]').click()
        cy.get('[data-ui-id="message-success"]').should('be.visible')
    });
});