import { addItemInCart } from './index'

describe('checkout', () => {
    before('add item in cart', () => {
        cy.visit('https://magento.softwaretestingboard.com/men/tops-men.html')
        cy.get('li[class="item product product-item"]').first().click()
        addItemInCart()
    });    
    it('checkout of product', () => {
        // visit checkout page
        cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping')
        cy.get('span[class="title"]', { timeout: 10000 }).should('be.visible')
        cy.request('GET', 'https://randomuser.me/api/?password=special,upper,lower,8-12?nat=br').as('createUser').then((response) => {
            const user = response.body.results[0]

            console.log(response)

            cy.get('#customer-email').type(user.email)
            
            cy.get('[name="shippingAddress.firstname"] input').type(user.name.first)
            cy.get('[name="lastname"]').type(user.name.last)
            cy.get('[name="street[0]"]').type(user.location.street.name)
            cy.get('[name="city"]').type(user.location.city)
            cy.get('[name="country_id"]').select('BR')
            cy.get('[name="region_id"]').select('Sergipe')
            cy.get('[name="postcode"]').type(user.location.postcode)
            cy.get('[name="telephone"]').type(user.phone)
            cy.get('[name="ko_unique_1"]').check()
            cy.get('[data-role="opc-continue"]').click()

            cy.get('.payment-group div[class=step-title]', { timeout: 10000 }).should('be.visible')
            cy.get('#billing-address-same-as-shipping-checkmo').check()
            cy.get('button[class="action primary checkout"]').click()

            cy.wait(10000)

            cy.get('[data-ui-id="page-title-wrapper"]', { timeout: 10000 }).should('be.visible')
            cy.get('.checkout-success').should('contain.text', 'Your order # is:')
        })
    });
});