class Page {
  open(path = '/forecast') {
    browser.url(path)
  }
}

module.exports = new Page()
