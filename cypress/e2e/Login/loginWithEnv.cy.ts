import { LoginPage } from "../../../POM/loginPage" 

const loginDetails=new LoginPage();

describe('Login', () => {

 const email = Cypress.env('login_email');
const password = Cypress.env('login_password');
const baseUrl = Cypress.env('base_url');

 

  beforeEach(() => {
    cy.visit(baseUrl);
   
    
  })  
  
  it('Login with valid credentials', () => {
    loginDetails.getEmailSelector().type(email);
    loginDetails.getPasswordSelector().type(password);
    loginDetails.getLoginButtonSelector().click();
    loginDetails.getLoginAssertion().should('be.visible');
  })  

  it('user can not login with invalid email', () => {
    loginDetails.getEmailSelector().type('wrong@email.com');
    loginDetails.getPasswordSelector().type(password);
    loginDetails.getLoginButtonSelector().click();
    loginDetails.getErrorMessageSelector().should('be.visible');
  })  

   it('user can not login with invalid password', () => {
    loginDetails.getEmailSelector().type(email);
    loginDetails.getPasswordSelector().type('wrongPassword');
    loginDetails.getLoginButtonSelector().click();
    loginDetails.getErrorMessageSelector().should('be.visible');
  })  

   it('user can not login with empty password and email', () => {
    loginDetails.getEmailSelector().type( ' ');
    loginDetails.getPasswordSelector().type(' ');
    loginDetails.getLoginButtonSelector().click();
    loginDetails.getErrorMessageSelector().should('be.visible');
  }) 
 
 })    