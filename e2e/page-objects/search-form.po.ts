import { by, element } from "protractor";

export default {
  get firstCharacterName() {
    return element(by.css("app-character h6"));
  },

  get input() {
    return element(by.id("query"));
  },

  get resultNotFoundLabel() {
    return element(by.cssContainingText("div", "Not found."));
  },

  get searchButton() {
    return element(by.css("button"));
  },

  get searchPlanetOption() {
    return element(by.css("#planets"));
  },
};
