import * as chai from "chai";
import { Given, setDefaultTimeout, Then, When } from "cucumber";
import { browser } from "protractor";
import characterPage from "../page-objects/character-page.po";
import helper from "../helpers/app.helpers";
import { CHARACTERS, PLANETS } from "../helpers/test-data";
import searchForm from "../page-objects/search-form.po";

chai.use(require("chai-as-promised"));
setDefaultTimeout(60 * 1000);

Given("I navigate to {string}", async (string) => {
  await browser.get("http://" + string + ":4200/");

  if (browser.getCurrentUrl()) {
    const url = await browser.getCurrentUrl();
    chai.expect(url).to.contain("http://localhost:4200/");
  }
});

Then("I see Lukes details", async () => {
  await helper.verifyCharacterDetails(
    CHARACTERS.luke.characterIndex,
    CHARACTERS.luke.name,
    CHARACTERS.luke.gender,
    CHARACTERS.luke.birthYear,
    CHARACTERS.luke.eyeColor,
    CHARACTERS.luke.skinColor
  );
});

Then("I see {int} results", async function (resultSize) {
  const size = await characterPage.charactersDisplayed.count();
  chai.expect(size).to.be.equal(resultSize);
});

Then(
  "I see details of Luke Skywalker, Anakin Skywalker and Shmi Skywalker",
  async () => {
    await helper.verifyCharacterDetails(
      CHARACTERS.luke.characterIndex,
      CHARACTERS.luke.name,
      CHARACTERS.luke.gender,
      CHARACTERS.luke.birthYear,
      CHARACTERS.luke.eyeColor,
      CHARACTERS.luke.skinColor
    );
    await helper.verifyCharacterDetails(
      CHARACTERS.anakin.characterIndex,
      CHARACTERS.anakin.name,
      CHARACTERS.anakin.gender,
      CHARACTERS.anakin.birthYear,
      CHARACTERS.anakin.eyeColor,
      CHARACTERS.anakin.skinColor
    );
    await helper.verifyCharacterDetails(
      CHARACTERS.shmi.characterIndex,
      CHARACTERS.shmi.name,
      CHARACTERS.shmi.gender,
      CHARACTERS.shmi.birthYear,
      CHARACTERS.shmi.eyeColor,
      CHARACTERS.shmi.skinColor
    );
  }
);

Then("I see details of Luke Skywalker and Luminara Unduli", async () => {
  await helper.verifyCharacterDetails(
    CHARACTERS.luke.characterIndex,
    CHARACTERS.luke.name,
    CHARACTERS.luke.gender,
    CHARACTERS.luke.birthYear,
    CHARACTERS.luke.eyeColor,
    CHARACTERS.luke.skinColor
  );
  await helper.verifyCharacterDetails(
    CHARACTERS.luminara.characterIndex,
    CHARACTERS.luminara.name,
    CHARACTERS.luminara.gender,
    CHARACTERS.luminara.birthYear,
    CHARACTERS.luminara.eyeColor,
    CHARACTERS.luminara.skinColor
  );
});

Then("I should see no results", async () => {
  await chai.expect(searchForm.resultNotFoundLabel.isDisplayed()).eventually.be
    .true;
});

Then("I see hoth's details", async () => {
  await helper.verifyPlanetSearchTable(1);
  await helper.verifyPlanetDetails(
    PLANETS.hoth.planetIndex,
    PLANETS.hoth.name,
    PLANETS.hoth.population,
    PLANETS.hoth.climate,
    PLANETS.hoth.gravity
  );
});

When(/^I search for ([^]*)$/, async function (name) {
  await helper.performSearch(name);
});

When("I click on planet option", async () => {
  await searchForm.searchPlanetOption.click();
});

When("I click on planet and click search button", async () => {
  await searchForm.searchPlanetOption.click();
  await searchForm.searchButton.click();
});

When("I delete search query and search again", async () => {
  await searchForm.input.clear();
  await searchForm.searchButton.click();
});

Then("Search results should be remove", async () => {
  await chai
    .expect(characterPage.characterName(1).isPresent())
    .to.become(false);
});
