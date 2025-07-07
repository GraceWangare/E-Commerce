/// refernce types="cypress" />

declare namespace Cypress {
  interface Chainable {
    dataCy(value: string): Chainable<Element>;
    login(username: string, password: string): Chainable<Element>;
  }
}