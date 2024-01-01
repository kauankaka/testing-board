// functions for products specs

const addItemInCart = () => {
    cy.get('div[id^="option-label-size"]').first().click()
    cy.get('div[id^="option-label-color"]').first().click()
    cy.get('#product-addtocart-button').click()
    cy.get('[data-ui-id="message-success"]').should('be.visible')
    cy.get('.counter-number').should('have.text', '1')
}

export {
    addItemInCart
}