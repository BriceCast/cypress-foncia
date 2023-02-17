import selectors from '../../support/selectors/home';
import { data } from '../../fixtures/data/home.json';

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('visit home page', () => {
    cy.get(selectors.fonciaLogo).should('exist');
  })

  data.pageElement.forEach(item => {
    it('Check home page element exist and be visible', () => {
      cy.log(`Check element ${item.name} existsand be visible`);
      cy.get(selectors[item.selector]).should('exist').should('be.visible');
    });
  });
});