export class CartPage {

    cartButton = '#cart > button'
    cartItems = '.table-responsive > .table > tbody > tr'
    cartTotal = '#cart-total'
    checkoutButton = '#button-cart'
    successMessage = '.alert-success'

    getCartButtonSelector() {
        return cy.get(this.cartButton);
    }
    getCartItemsSelector() {
        return cy.get(this.cartItems);
    }       

    getCartTotalSelector() {
        return cy.get(this.cartTotal);
    } 
}