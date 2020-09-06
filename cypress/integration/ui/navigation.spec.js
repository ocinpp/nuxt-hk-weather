/// <reference types="cypress" />

const BASE_URL = Cypress.env('base_url')

describe('Navigation Menu Test', () => {
  it('clicking "Forecast" navigates to "Forecast" url', () => {
    cy.visit(BASE_URL)
    cy.contains('Forecast').click()
    cy.url().should('eq', BASE_URL + '/forecast')
    cy.location('pathname').should('eq', '/forecast')
  })

  it('clicking "District" navigates to "District" url', () => {
    cy.visit(BASE_URL)
    cy.contains('District').click()
    cy.url().should('eq', BASE_URL + '/district')
    cy.location('pathname').should('eq', '/district')
  })

  it('clicking "Current" navigates to "Current" url', () => {
    cy.visit(BASE_URL + '/district')
    cy.contains('Current').click()
    cy.url().should('eq', BASE_URL + '/')
    cy.location('pathname').should('eq', '/')
  })
})
