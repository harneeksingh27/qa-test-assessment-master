import { element, by, ElementFinder } from 'protractor';

module.exports = {

    planetName(i: number): ElementFinder {
        return element(by.css('.planet-' + i + ' h6'))
    },

    planetPopulationLabel(i: number): ElementFinder {
        return element(by.css('.planet-' + i + ' .row-population .col-sm-2'))
    },

    planetPopulation(i: number): ElementFinder {
        return element(by.css('.planet-' + i + ' .row-population .col-sm-10'))
    },

    planetClimateLabel(i: number): ElementFinder {
        return element(by.css('.planet-' + i + ' .row-climate .col-sm-2'))
    },

    planetClimate(i: number): ElementFinder {
        return element(by.css('.planet-' + i + ' .row-climate .col-sm-10'))
    },

    planetGravityLabel(i: number): ElementFinder {
        return element(by.css('.planet-' + i + ' .row-gravity .col-sm-2'))
    },

    planetGravity(i: number): ElementFinder {
        return element(by.css('.planet-' + i + ' .row-gravity .col-sm-10'))
    },
};
