/// <reference types="cypress" />

describe('Navigation Menu Test', () => {
  const baseUrl = Cypress.config('baseUrl')

  it('clicks "Forecast" navigates to "Forecast" url', () => {
    cy.visit('/')
    cy.contains('Forecast').click()
    cy.url().should('eq', baseUrl + '/forecast')
    cy.location('pathname').should('eq', '/forecast')
  })

  it('clicks "District" navigates to "District" url', () => {
    cy.visit('/')
    cy.contains('District').click()
    cy.url().should('eq', baseUrl + '/district')
    cy.location('pathname').should('eq', '/district')
  })

  it('clicks "Current" navigates to "Current" url', () => {
    cy.visit('/district')
    cy.contains('Current').click()
    cy.url().should('eq', baseUrl + '/')
    cy.location('pathname').should('eq', '/')
  })
})
