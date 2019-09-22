'use strict';

const wd = require('macaca-wd');

const remoteConfig = {
  host: 'localhost',
  port: 3456 // Macaca server 默认使用 3456 端口
};

const driver = wd.promiseChainRemote(remoteConfig);

describe('test electron.app', function() {
  this.timeout(5 * 60 * 1000);

  let driver = wd.promiseChainRemote({
    host: 'localhost',
    port: process.env.MACACA_SERVER_PORT || 3456
  });

  before(function () {
    return driver.init({
      platformName: 'desktop',
      browserName: 'chrome',
      chromeOptions: {
        "binary": "/Applications/macaca-electron-builder.app/Contents/MacOS/macaca-electron-builder" // 填写自己的执行文件路劲
      }
    }).sleep(2 * 1000)
  });

  after(function () {
    return driver
      .sleep(1000)
      .close()
  })

  it('click link', function () {
    return driver
      .waitForElementById('macacaId', 5000, 100)
      .click()
  })

  it('click button', function () {
    return driver
      .elementByCss('#app > div > header > div.sidebar-button')
      .click()
  })

  it('click title ', function () {
    return driver
      .elementByCss('#app > div > div.sidebar > nav > div:nth-child(2) > div > a > span.title')
      .sleep(2000)
      .click()
  })

  it('click title', function () {
    return driver
      .elementByCss('#app > div > div.sidebar > nav > div:nth-child(3) > div > a > span.title')
      .sleep(2000)
      .click()
  })

  it('input text', function () {
    return driver
      .elementByCss('#app > div > header > div.links > div > input')
      .sleep(2000)
      .click()
      .sendKeys('计算机')
  })
})