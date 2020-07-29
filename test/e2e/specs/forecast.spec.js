const Page = require('../pageObjects/forecast.page')
describe('Forecast Page H1 Test', () => {
  it('should have the correct H1', () => {
    Page.open()
    const header = $('h1')
    expect(header).toBeExisting()
    expect(header).toHaveText('9-Day Weather Forecast')
  })
})
