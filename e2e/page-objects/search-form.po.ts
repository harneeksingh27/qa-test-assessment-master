import { element, by, ElementFinder } from 'protractor';

module.exports = {
    get input() {
        return element(by.id('query'));
    },
    get searchBtn() {
        return element(by.css('button'));
    },
    get firstCharacterName() {
        return element(by.css('app-character h6'));
    },

    get resultNotFoundLabel() {
        return element(by.cssContainingText('div', 'Not found.'));
    },

    get searchPlanetOption() {
        return element(by.css('#planets'));
    }
};
