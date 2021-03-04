# QA Engineer Assessment Solution

## Introduction

Name: Harneek Singh  
Email: harneeksingh27@gmail.com  
Mobile: 0619794291

## Project Structure
The proposed project structure is as below

```
e2e
│   READMEs
│   protractor config
│   reporting utils
│
└───features
│   |   feature-files   
│ 
│    
└───helpers    
│   │   helper methods
│   │   test data
│   
└───page-objects
│     │   page-objects
│ 
└───steps
│     │   step defination
│ 
                       
```
* The root level consists of protractor config, reporting utils like ```index.js``` and ```screenshotUtil.js```  

* ### ```features``` consists of all feature files.   
    There are three feature files ```search-both```, ```search-character``` and ```search-planet``` divided as per search functionality provided by the application.  

* ### ```helpers``` consists of all helper files  
    ```app.helpers``` consists of all the reusable methods used in step defination ```app.steps```   
    ```test-data``` consists of the test data used in the project  

* ### ```page-objects``` consists of all page objects (elements per page)  
    The page objects are divided as per search form and search results displayed.  
    ```character-page``` elemnts of character search results  
    ```planets-page``` elements of planet search results
    ```search-form``` elements of search form  


* ### ```steps``` consists of step defination
    Steps consists of step defination executed by feature files.

## Reporting
For simplicity the reporting solution used is ```cucumber-html-reporter``` with the ability to attach screenshots for failed test scenarios.  
```index.js``` generates cucumber-html-report and ```screenshotUtil.js``` attaches screenshot to failed test scenarios


## Requirements
* **NodeJS 12** (Tested)
* Chrome browser **(89.0)**
* Tested on Mac OS X **(tested on Catalina & BigSur)**  

## Execution  
Run `ng e2e` or `npm run e2e` to execute the end-to-end tests via [Protractor] same as mentioned [here](./README.md)

> **CI Suggestion** 
>> It is recommended to run the tests as part of CI pipeline using any CI tool like Jenkins  
>>
>> Since the test suite is lighter, the tests can run with every pull request and merge to the master.

## Reporting  
Run ```node index.js``` to generate execution report

## Improvements to the source code of the application  
Index has been added to ```app-character``` and ```planet-character``` in ```app.component.html``` for easy identification of search result elements  

Class name has been added to results row in ```character.component.html``` and ```planet.component.html``` for easy identification of search result elements. For example ```div class="row-gender"``` has been added to gender search result row for easy identification of elements  

## attached artifacts
1. [Test Scenarios](./TEST-SCENARIOS.md)
2. [Bug Report](./BUG_REPORT.md)    