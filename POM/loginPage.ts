export class LoginPage{
 
    emialInput= '#input-email'
    passwordInput  = '#input-password'
    loginButton ='form > .btn'
    myAccount ='#content > :nth-child(1)'
    errorMessage = '.alert'

    getEmailSelector() {
        return cy.get(this.emialInput);
    }
    getPasswordSelector() {
        return cy.get(this.passwordInput);
    }
    getLoginButtonSelector() {
        return cy.get(this.loginButton);
    }
    getLoginAssertion() {
        return cy.get(this.myAccount);
    }
    getErrorMessageSelector() {
        return cy.get (this.errorMessage);
    }

};
  
    

  