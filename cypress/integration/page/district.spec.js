/// <reference types="cypress" />

// const BASE_URL = Cypress.env('base_url')

describe('District (EN) Page Content Test', () => {
  const baseUrl = Cypress.config('baseUrl')

  it('visits "District" page', () => {
    cy.visit('/district')
    cy.url().should('eq', baseUrl + '/en/district')
  })

  it('has correct page heading', () => {
    cy.get('h1').should('have.text', 'District Weather')
  })

  it('has at least 26 locations', () => {
    cy.get('#district-weather').children().should('have.length.at.least', 26)
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

  it('has correct district temperatures and units', () => {
    cy.get('#district-weather')
      .children()
      .each(($child) => {
        const t = $child.children().eq(0).children().eq(1).text()
        expect(t).match(/\s*[0-9]{1,} C\s*/g)
      })
  })

  it('has correct last district', () => {
    cy.get('#district-weather')
      .children()
      .last()
      .children()
      .eq(0)
      .children()
      .eq(0)
      .should('have.text', 'Tai Mei Tuk')
  })
})

describe('District (TC) Page Content Test', () => {
  const baseUrl = Cypress.config('baseUrl')

  it('visits "District" page', () => {
    cy.visit('/tc/district')
    cy.url().should('eq', baseUrl + '/tc/district')
  })

  it('has correct page heading', () => {
    cy.get('h1').should('have.text', '分區天氣')
  })

  it('has at least 26 locations', () => {
    cy.get('#district-weather').children().should('have.length.at.least', 26)
  })

  it('has correct first district', () => {
    cy.get('#district-weather')
      .children()
      .eq(0)
      .children()
      .eq(0)
      .children()
      .eq(0)
      .should('have.text', '京士柏')
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

  it('has correct district temperatures and units', () => {
    cy.get('#district-weather')
      .children()
      .each(($child) => {
        const t = $child.children().eq(0).children().eq(1).text()
        expect(t).match(/\s*[0-9]{1,} C\s*/g)
      })
  })

  it('has correct last district', () => {
    cy.get('#district-weather')
      .children()
      .last()
      .children()
      .eq(0)
      .children()
      .eq(0)
      .should('have.text', '大美督')
  })
})
