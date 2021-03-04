import { async } from "@angular/core/testing";

const { Given, When, Then } = require('cucumber');
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
const { browser } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

const searchFormPO = require('../page-objects/search-form.po');
const characterPage = require('../page-objects/character-page.po');
const helper = require('../helpers/app.helpers');

Given('I navigate to {string}', async (string) => {
    await browser.get('http://' + string + ':4200/');

    if (browser.getCurrentUrl()) {
        return browser.getCurrentUrl().then(function (text) {
            chai.expect(text).to.contain('http://localhost:4200/');
        });
    }
});

Then('I see Lukes details', async () => {
    await helper.verifyCharacterDetails(1, 'Skywalker', 'male', '19BBY', 'blue', 'fair')
});

Then('I see {int} results', async function (resultSize) {
    const size = await characterPage.charactersDisplayed.count()
    chai.expect(size).to.be.equal(resultSize)
});

Then('I see details of Luke Skywalker, Anakin Skywalker and Shmi Skywalker', async () => {

    await helper.verifyCharacterDetails(1, 'Luke Skywalker', 'male', '19BBY', 'blue', 'fair')
    await helper.verifyCharacterDetails(2, 'Anakin Skywalker', 'male', '41.9BBY', 'blue', 'fair')
    await helper.verifyCharacterDetails(3, 'Shmi Skywalker', 'female', '72BBY', 'brown', 'fair')

});


Then('I see details of Luke Skywalker and Luminara Unduli', async () => {
    await helper.verifyCharacterDetails(1, 'Luke Skywalker', 'male', '19BBY', 'blue', 'fair')
    await helper.verifyCharacterDetails(2, 'Luminara Unduli', 'male', '58BBY', 'blue', 'yellow')
});

Then('I should see no results', async () => {
    await chai.expect(searchFormPO.resultNotFoundLabel.isDisplayed()).eventually.be.true
});


Then('I see hoth\'s details', async () => {

    await helper.verifyPlanetSearchTable(1)
    await helper.verifyPlanetDetails(1, 'Hoth', 'unknown', 'frozen', '1.1 standard')

});

When(/^I search for ([^]*)$/, async function (name) {
    await helper.performSearch(name);
});

When('I click on planet option', async () => {
    await searchFormPO.searchPlanetOption.click();
});


When('I click on planet and click search button', async () => {
    await searchFormPO.searchPlanetOption.click();
    await searchFormPO.searchBtn.click();
});
