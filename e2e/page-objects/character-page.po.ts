import { by, element, ElementFinder } from "protractor";

export default {
  get charactersDisplayed() {
    return element.all(by.css("app-character"));
  },

  characterName(i: number): ElementFinder {
    return element(by.css(".character-" + i + " h6"));
  },

  personDetailBirthYear(i: number): ElementFinder {
    return element(by.css(".character-" + i + " .row-birth-year .col-sm-10"));
  },

  personDetailBirthYearLabel(i: number): ElementFinder {
    return element(by.css(".character-" + i + " .row-birth-year .col-sm-2"));
  },

  personDetailEyeColor(i: number): ElementFinder {
    return element(by.css(".character-" + i + " .row-eye-color .col-sm-10"));
  },

  personDetailEyeColorLabel(i: number): ElementFinder {
    return element(by.css(".character-" + i + " .row-eye-color .col-sm-2"));
  },

  personDetailGender(i: number): ElementFinder {
    return element(by.css(".character-" + i + " .row-gender .col-sm-10"));
  },

  personDetailGenderLabel(i: number): ElementFinder {
    return element(by.css(".character-" + i + " .row-gender .col-sm-2"));
  },

  personDetailSkinColor(i: number): ElementFinder {
    return element(by.css(".character-" + i + " .row-skin-color .col-sm-10"));
  },

  personDetailSkinColorLabel(i: number): ElementFinder {
    return element(by.css(".character-" + i + " .row-skin-color .col-sm-2"));
  },
};
