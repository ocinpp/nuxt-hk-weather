/// <reference types="cypress" />

const BASE_URL = Cypress.env('base_url')

describe('Current Page Content Test', () => {
  it('Visits "Current" page', () => {
    cy.visit(BASE_URL)
    cy.get('.f3').contains('Hong Kong Weather')
    cy.get(':nth-child(1) > .f4').should('have.text', 'General Situation')
    cy.get(':nth-child(3) > .f4').should('contain', 'Weather forecast')
    cy.get(':nth-child(5) > .f4').should('have.text', 'Outlook')
  })
})
