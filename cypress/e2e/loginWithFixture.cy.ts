import { LoginPage } from "../../POM/loginPage" 

const loginDetails=new LoginPage();


describe('Login', () => {


  beforeEach(() => {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    
    
    })  
  
  it('Login with valid credentials', () => {
    cy.fixture('login').then((loginData) => {
        loginDetails.getEmailSelector().type(loginData.validUsername);
        loginDetails.getPasswordSelector().type(loginData.validPassword);
        loginDetails.getLoginButtonSelector().click();
        loginDetails.getLoginAssertion().should('be.visible');
    })
  })  

  it('Login with invalid password', () => {
    cy.fixture('login').then((loginData) => {
        loginDetails.getEmailSelector().type(loginData.validUsername);
        loginDetails.getPasswordSelector().type(loginData.invalidPassword);
        loginDetails.getLoginButtonSelector().click();
        loginDetails.getErrorMessageSelector().should('be.visible');
    })
  })  

   it('Login with invalid  username', () => {
    cy.fixture('login').then((loginData) => {
        loginDetails.getEmailSelector().type(loginData.invalidUsername);
        loginDetails.getPasswordSelector().type(loginData.validPassword);
        loginDetails.getLoginButtonSelector().click();
        loginDetails.getErrorMessageSelector().should('be.visible');
    })
  }) 
  it.only('Login with empty passsword and empty email', () => {
    cy.fixture('login').then((loginData) => {
        loginDetails.getEmailSelector().type(' ');
        loginDetails.getPasswordSelector().type(' ');
        loginDetails.getLoginButtonSelector().click();
        cy.contains('Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.').should('be.visible');
        
    })
  }) 
 
 })    