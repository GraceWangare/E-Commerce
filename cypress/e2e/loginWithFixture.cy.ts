import { LoginPage } from "../../POM/loginPage" 

const loginDetails=new LoginPage();


describe('Login', () => {


  beforeEach(() => {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    
    
    })  
  
  it('Login with valid credentials', () => {
    cy.fixture('loginDetails').then((loginDetails) => {
        loginDetails.getEmailSelector().type(loginDetails.valid);
        loginDetails.getPasswordSelector().type(loginDetails.validPassword);
        loginDetails.getLoginButtonSelector().click();
        loginDetails.getLoginAssertion().should('be.visible');
    })
  })  

  it('Login with invalid password', () => {
    cy.fixture('loginDetails').then((loginDetails) => {
        loginDetails.getEmailSelector().type(loginDetails.valid);
        loginDetails.getPasswordSelector().type(loginDetails.invalidPassword);
        loginDetails.getLoginButtonSelector().click();
        loginDetails.getErrorMessageSelector().should('be.visible');
    })
  })  

   it('Login with invalid  username', () => {
    cy.fixture('loginDetails').then((loginDetails) => {
        loginDetails.getEmailSelector().type(loginDetails.invalidUsername);
        loginDetails.getPasswordSelector().type(loginDetails.validPassword);
        loginDetails.getLoginButtonSelector().click();
        loginDetails.getErrorMessageSelector().should('be.visible');
    })
  }) 
 
 })    