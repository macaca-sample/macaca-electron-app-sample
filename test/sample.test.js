'use strict';

const wd = require('macaca-wd');

describe('./test/sample.test.js', function() {
  this.timeout(5 * 60 * 1000);

  const driver = wd.promiseChainRemote({
    host: 'localhost',
    port: process.env.MACACA_SERVER_PORT || 3456
  });

  before(() => {
    return driver.init({
      platformName: 'desktop',
      browserName: 'chrome',
      chromeOptions: {
        binary: '/Applications/macaca-electron-builder.app/Contents/MacOS/macaca-electron-builder' // 填写自己的执行文件路劲
      }
    }).sleep(2 * 1000)
  });

  after(() => {
    return driver
      .sleep(1000)
      .close();
  })

  it('click link', () => {
    return driver
      .waitForElementById('macacaId', 5000, 100)
      .click();
  })

  it('click button', () => {
    return driver
      .elementByCss('#app > div > header > div.sidebar-button')
      .click();
  })

  it('click title ', () => {
    return driver
      .elementByCss('#app > div > div.sidebar > nav > div:nth-child(2) > div > a > span.title')
      .sleep(2000)
      .click();
  })

  it('click title', () => {
    return driver
      .elementByCss('#app > div > div.sidebar > nav > div:nth-child(3) > div > a > span.title')
      .sleep(2000)
      .click();
  })

  it('input text', () => {
    return driver
      .elementByCss('#app > div > header > div.links > div > input')
      .sleep(2000)
      .click()
      .sendKeys('计算机');
  })
})