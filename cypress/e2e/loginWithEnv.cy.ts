import { LoginPage } from "../../POM/loginPage" 

const loginDetails=new LoginPage();


describe('Login', () => {

  const email=Cypress.env('LOGIN_EMAIL');
  const password=Cypress.env('LOGIN_PASSWORD');
 

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