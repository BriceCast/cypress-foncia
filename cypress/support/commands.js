// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import selectors from '../support/selectors/home';

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('useBasicSearchBar', (project, property, maxPrice, city) => {
  cy.get(selectors.searchTab).click();
  cy.get(selectors.projectSelect).click();
  cy.get(`input[name="project"][value="${project}"]`).click({ force: true });

  if (property !== 'all' && property.length > 0) {
    cy.get(selectors.propertySelect).click();
    property.forEach(element => {
      cy.get(`input[name="type"][value="${element}"]`).click({ force: true });
    });
  }

  cy.get(selectors.maxPriceField).clear().type(maxPrice);
  cy.get(selectors.cityField).click().focused().type(`${city}`);
  cy.get('[role="option"]').contains(city).eq(0).click();
  cy.get(selectors.searchButton).contains('Rechercher').click({ force: true });
});
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