describe('Cart',()=>{

    const email = Cypress.env('login_email')
    const password = Cypress.env('login_password')
    beforeEach(() => {

        cy.clearCookies();
        cy.clearLocalStorage();
       
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/account')  
    })

    it('Add product to cart', () => {
        cy.get('.nav > :nth-child(4) > a').click();
        cy.get('.button-group').click();
        cy.get('#cart-total').should('contain', '1 item(s)');
        
        
    })

    it('clear cart', () => {
        cy.get(':nth-child(4) > a > .hidden-xs').click();
        cy.get('.input-group-btn > .btn-danger').click();
        cy.contains('Your shopping cart is empty!').should('exist');
        
        
        
    })

})