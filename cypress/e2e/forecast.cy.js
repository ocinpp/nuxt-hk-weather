/// <reference types="cypress" />

describe('Forecast (EN) Page Content Test', () => {
  beforeEach(() => {
    cy.visit('/forecast')
  })

  it('visits "Forecast" page', () => {
    cy.get('.f3').should('have.text', '9-Day Weather Forecast')
    cy.get('.f4').should('have.text', 'General Situation')
    cy.get('.lh-copy').should('not.be.empty')
  })

  it('has 9 weather forecast entries', () => {
    cy.get('#weather-forecast').children().should('have.length', 9)
  })
})

describe('Forecast (TC) Page Content Test', () => {
  beforeEach(() => {
    cy.visit('/tc/forecast')
  })

  it('visits "Forecast" page', () => {
    cy.get('.f3').should('have.text', '香港九天天氣預報')
    cy.get('.f4').should('have.text', '天氣概況')
    cy.get('.lh-copy').should('not.be.empty')
  })

  it('has 9 weather forecast entries', () => {
    cy.get('#weather-forecast').children().should('have.length', 9)
  })
})
