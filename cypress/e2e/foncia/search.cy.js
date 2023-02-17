import selectors from '../../support/selectors/home';

describe('Search Bar in home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Rent an apartment in Paris with a MAX rent of 1500€', () => {
    cy.useBasicSearchBar('location', ['appartement'], 1500, 'Paris');
    cy.url()
      .should('include', 'paris')
      .should('include', 'appartement')
      .should('include', '1500')
      .should('include', 'location');
    cy.get(selectors.nbResultFound).invoke('text').should('not.equal', '0');
    cy.get(selectors.resultMap).should('exist');
    cy.get('app-annonce-card[id*="reference-"]').then($elts => {
      expect($elts.length).greaterThan(0);
    })
  });

  it('Rent an apartment or house in Paris with a MAX rent of 5000€', () => {
    cy.useBasicSearchBar('location', ['appartement', 'maison'], 5000, 'Paris');
    cy.url()
      .should('include', 'paris')
      .should('include', 'appartement')
      .should('include', 'maison')
      .should('include', '5000')
      .should('include', 'location');
    cy.get(selectors.nbResultFound).invoke('text').should('not.equal', '0');
    cy.get(selectors.resultMap).should('exist');
    cy.get('app-annonce-card[id*="reference-"]').then($elts => {
      expect($elts.length).greaterThan(0);
    })
  });
});