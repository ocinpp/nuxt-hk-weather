/// <reference types="cypress" />

const BASE_URL = Cypress.env('base_url')

describe('Forecast Page Content Test', () => {
  it('Visits "Forecast" page', () => {
    cy.visit(BASE_URL + '/forecast')
    cy.get('.f3').should('have.text', '9-Day Weather Forecast')
    cy.get('.f4').should('have.text', 'General Situation')
    cy.get('.lh-copy').should('not.be.empty')
  })
})
