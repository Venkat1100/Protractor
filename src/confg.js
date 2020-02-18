var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config={
    directConect : true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Calculator.js'],
    capabilities:{
        'browserName': 'chrome'
    },
    onPrepare : function(){
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'target/screenshots'
            })
          );
    },
    jasmineNodeOpts:{
        showColors:true,
    }
}