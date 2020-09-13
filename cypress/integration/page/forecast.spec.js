/// <reference types="cypress" />

// const BASE_URL = Cypress.env('base_url')

describe('Forecast Page Content Test', () => {
  it('visits "Forecast" page', () => {
    cy.visit('/forecast')
    cy.get('.f3').should('have.text', '9-Day Weather Forecast')
    cy.get('.f4').should('have.text', 'General Situation')
    cy.get('.lh-copy').should('not.be.empty')
  })

  it('has 9 weather forecast entries', () => {
    cy.get('#weather-forecast').children().should('have.length', 9)
  })
})
