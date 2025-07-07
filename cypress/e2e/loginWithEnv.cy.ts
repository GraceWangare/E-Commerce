import { LoginPage } from "../../POM/loginPage" 

const loginDetails=new LoginPage();


describe('Login', () => {

  const email=Cypress.env('login_email') ;
  const password=Cypress.env('login_password') ;
 

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