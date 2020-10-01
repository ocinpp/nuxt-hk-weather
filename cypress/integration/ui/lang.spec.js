/// <reference types="cypress" />

describe('Language Switch Test', () => {
  const baseUrl = Cypress.config('baseUrl')

  it('clicks "TC" navigates to "TC" url', () => {
    cy.visit('/')
    cy.get('a').contains('中文').click()
    cy.url().should('eq', baseUrl + '/tc')
    cy.location('pathname').should('eq', '/tc')
  })

  it('clicks "EN" navigates to "EN" url', () => {
    cy.visit('/tc')
    cy.get('a').contains('EN').click()
    cy.url().should('eq', baseUrl + '/en')
    cy.location('pathname').should('eq', '/en')
  })
})
