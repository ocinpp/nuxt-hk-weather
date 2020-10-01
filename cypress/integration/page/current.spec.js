/// <reference types="cypress" />

describe('Current (EN) Page Content Test', () => {
  it('visits "Current" page', () => {
    cy.visit('/')
    cy.get('.f3').contains('Hong Kong Weather')
    cy.get(':nth-child(1) > .f4').should('have.text', 'General Situation')
    cy.get(':nth-child(3) > .f4').should('contain', 'Weather forecast')
    cy.get(':nth-child(5) > .f4').should('have.text', 'Outlook')
  })
})

describe('Current (TC) Page Content Test', () => {
  it('visits "Current" page', () => {
    cy.visit('/tc')
    cy.get('.f3').contains('香港天氣報告')
    cy.get(':nth-child(1) > .f4').should('have.text', '天氣概況')
    cy.get(':nth-child(3) > .f4').should('contain', '天氣預測')
    cy.get(':nth-child(5) > .f4').should('have.text', '展望')
  })
})
