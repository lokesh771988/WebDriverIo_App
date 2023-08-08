const path = require('path')
const {config} = require('./wdio.shared.conf')

config.port= 4723

config.specs= [
    './test/specs/**/*.js'
]

config.services= ['appium']

config.capabilities= [{
    // capabilities for local Appium web tests on an Android Emulator
    platformName: 'Android', // or "iOS"
    //browserName: 'Chrome', // or "Safari"
    'appium:deviceName': 'Android GoogleAPI Emulator', // or "iPhone Simulator"
    'appium:platformVersion': '11.0', // or "16.2" (for running iOS v16)
    'appium:automationName': 'UiAutomator2', // or "XCUITest"
    "appium:App": path.join(process.cwd(), "\\app\\API Demos_4.0_apkcombo.com.apk")
}]

exports.config = config;