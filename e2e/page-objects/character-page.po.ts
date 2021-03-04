import { element, by, ElementFinder } from 'protractor';

module.exports = {

    characterName(i: number): ElementFinder {
        return element(by.css('.character-' + i + ' h6'))
    },

    personDetailgenderLabel(i: number): ElementFinder {
        return element(by.css('.character-' + i + ' .row-gender .col-sm-2'))
    },

    personDetailgender(i: number): ElementFinder {
        return element(by.css('.character-' + i + ' .row-gender .col-sm-10'))
    },

    personDetailBirthYearLabel(i: number): ElementFinder {
        return element(by.css('.character-' + i + ' .row-birth-year .col-sm-2'))
    },

    personDetailBirthYear(i: number): ElementFinder {
        return element(by.css('.character-' + i + ' .row-birth-year .col-sm-10'))
    },

    personDetailEyeColorLabel(i: number): ElementFinder {
        return element(by.css('.character-' + i + ' .row-eye-color .col-sm-2'))
    },

    personDetailEyeColor(i: number): ElementFinder {
        return element(by.css('.character-' + i + ' .row-eye-color .col-sm-10'))
    },

    personDetailSkinColorLabel(i: number): ElementFinder {
        return element(by.css('.character-' + i + ' .row-skin-color .col-sm-2'))
    },

    personDetailSkinColor(i: number): ElementFinder {
        return element(by.css('.character-' + i + ' .row-skin-color .col-sm-10'))
    },

    get charactersDisplayed() {
        return element.all(by.css('app-character'))
    },
};
