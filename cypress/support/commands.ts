/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

import cypress = require("cypress")
import { LoginPage } from "../../POM/loginPage" 

const loginPage = new LoginPage()
const email = Cypress.env('LOGIN_EMAIL')
const password = Cypress.env('LOGIN_PASSWORD')

Cypress.Commands.add('login', (email, password) => {
  cy.session(`${email}-${password}`, () => {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    // cy.get('.oxd-input.oxd-input--active').type('Admin')
    loginPage.getEmailSelector().type(email)
   loginPage.getPasswordSelector().type(password)
   loginPage.getLoginButtonSelector().click()
   loginPage.getLoginAssertion().should('be.visible')
   loginPage.getLoginAssertion().should('be.visible');
  })
  

    
})
  