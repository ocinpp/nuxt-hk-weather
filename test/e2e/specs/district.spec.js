const Page = require('../pageObjects/district.page')
describe('District Page H1 Test', () => {
  it('should have the correct H1', () => {
    Page.open()
    const header = $('h1')
    expect(header).toBeExisting()
    expect(header).toHaveText('District Weather')
  })
})
