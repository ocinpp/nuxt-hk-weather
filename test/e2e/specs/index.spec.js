const Page = require('../pageObjects/current.page')

describe('App Title Test', () => {
  it('should open correct app', () => {
    Page.open()
    expect(browser).toHaveTitle('Hong Kong Weather')
  })
})

describe('Current Page H1 Test', () => {
  it('should have the correct H1', () => {
    Page.open()
    const header = $('h1')
    expect(header).toBeExisting()
    expect(header).toHaveText('Hong Kong Weather')
  })
})
