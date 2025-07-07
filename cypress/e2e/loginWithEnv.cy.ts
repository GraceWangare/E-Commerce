import { LoginPage } from "../../POM/loginPage" 

const loginDetails=new LoginPage();


describe('Login', () => {

  const email=Cypress.env('validUsername');
  const password=Cypress.env('validPassword');
 

  beforeEach(() => {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    
    
  })  
  
  it('Login with valid credentials', () => {
    loginDetails.getEmailSelector().type(email);
    loginDetails.getPasswordSelector().type(password);
    loginDetails.getLoginButtonSelector().click();
    loginDetails.getLoginAssertion().should('be.visible');
  })  
 
 })    