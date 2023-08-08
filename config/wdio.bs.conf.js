require('dotenv').config()

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'testingtutorials_AShMp8',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'Bfgxaf2WsQVPpzLziuux',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://sample.app',
          buildIdentifier: "12.0",
          browserstackLocal: true
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22 Ultra',
        platformVersion: '12.0',
        platformName: 'android',
      }
    }, {
      'bstack:options': {
        deviceName: 'Google Pixel 7',
        platformVersion: '13.0',
        platformName: 'android',
      } }, {
      'bstack:options': {
        deviceName: 'OnePlus 9',
        platformVersion: '11.0',
        platformName: 'android',
      }
    }],
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Sample",
        buildName: "bstack-demo",
        debug: true,
        networkLogs: true
      }
    },
    maxInstances: 10,
}