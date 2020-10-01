/// <reference types="cypress" />

describe('Navigation (EN) Menu Test', () => {
  const baseUrl = Cypress.config('baseUrl')

  it('clicks "Forecast" navigates to "Forecast" url', () => {
    cy.visit('/')
    cy.contains('Forecast').click()
    cy.url().should('eq', baseUrl + '/en/forecast')
    cy.location('pathname').should('eq', '/en/forecast')
  })

  it('clicks "District" navigates to "District" url', () => {
    cy.visit('/')
    cy.contains('District').click()
    cy.url().should('eq', baseUrl + '/en/district')
    cy.location('pathname').should('eq', '/en/district')
  })

  it('clicks "Current" navigates to "Current" url', () => {
    cy.visit('/district')
    cy.contains('Current').click()
    cy.url().should('eq', baseUrl + '/en')
    cy.location('pathname').should('eq', '/en')
  })
})

describe('Navigation (TC) Menu Test', () => {
  const baseUrl = Cypress.config('baseUrl')

  it('clicks "Forecast" navigates to "Forecast" url', () => {
    cy.visit('/tc')
    cy.contains('天氣預報').click()
    cy.url().should('eq', baseUrl + '/tc/forecast')
    cy.location('pathname').should('eq', '/tc/forecast')
  })

  it('clicks "District" navigates to "District" url', () => {
    cy.visit('/tc')
    cy.contains('分區天氣').click()
    cy.url().should('eq', baseUrl + '/tc/district')
    cy.location('pathname').should('eq', '/tc/district')
  })

  it('clicks "Current" navigates to "Current" url', () => {
    cy.visit('/tc/district')
    cy.contains('天氣實況').click()
    cy.url().should('eq', baseUrl + '/tc')
    cy.location('pathname').should('eq', '/tc')
  })
})
