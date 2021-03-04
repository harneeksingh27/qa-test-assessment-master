var reporter = require('cucumber-html-reporter');    
     
var options = {    
        theme: 'bootstrap',    
        jsonFile: 'test-reports/cucumber-test-results.json',    
        output: './cucumber_report.html',    
        reportSuiteAsScenarios: true,    
        scenarioTimestamp: true,    
        launchReport: true,    
        metadata: {    
            "App Version":"1.0.0",    
            "Test Environment": "STAGING",    
            "Browser": "Chrome  89.0.0.0",    
            "Platform": "Mac",      
        }    
    };    
    reporter.generate(options);