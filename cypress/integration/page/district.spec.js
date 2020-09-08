/// <reference types="cypress" />

const BASE_URL = Cypress.env('base_url')

describe('District Page Content Test', () => {
  it('visits "District" page', () => {
    cy.visit(BASE_URL + '/district')
    cy.url().should('eq', BASE_URL + '/district')
  })

  it('has correct page heading', () => {
    cy.get('h1').should('have.text', 'District Weather')
  })

  it('has 27 locations', () => {
    cy.get('#district-weather').children().should('have.length', 27)
  })

  it('has correct first district', () => {
    cy.get('#district-weather')
      .children()
      .eq(0)
      .children()
      .eq(0)
      .children()
      .eq(0)
      .should('have.text', "King's Park")
  })

  it('has correct first district temperature and unit', () => {
    cy.get('#district-weather')
      .children()
      .eq(0)
      .children()
      .eq(0)
      .children()
      .eq(1)
      .invoke('text')
      .should('match', /\s*[0-9]{1,} C\s*/g)
  })

  it('has correct last district', () => {
    cy.get('#district-weather')
      .children()
      .eq(26)
      .children()
      .eq(0)
      .children()
      .eq(0)
      .should('have.text', 'Tai Mei Tuk')
  })
})
