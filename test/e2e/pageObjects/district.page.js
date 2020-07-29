class Page {
  open(path = '/district') {
    browser.url(path)
  }
}

module.exports = new Page()
