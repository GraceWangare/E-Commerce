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
 
 })    