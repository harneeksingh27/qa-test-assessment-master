import * as chai from "chai";
import characterPage from "../page-objects/character-page.po";
import planetsPage from "../page-objects/planets-page.po";
import searchForm from "../page-objects/search-form.po";

export default {
  performSearch: async function (searchQuery: any) {
    await searchForm.input.sendKeys(searchQuery);
    await searchForm.searchButton.click();
  },

  verifyCharacterDetails: async function (
    charcterIndex: number,
    name: string,
    gender: string,
    birthYear: string,
    eyeColor: string,
    skinColor: String
  ) {
    await chai
      .expect(
        characterPage.characterName(charcterIndex).getAttribute("innerText")
      )
      .to.eventually.contain(name);

    await chai
      .expect(
        characterPage
          .personDetailGenderLabel(charcterIndex)
          .getAttribute("innerText")
      )
      .to.eventually.contain("Gender");

    await chai
      .expect(
        characterPage
          .personDetailGender(charcterIndex)
          .getAttribute("innerText")
      )
      .to.eventually.contain(gender);

    await chai
      .expect(
        characterPage
          .personDetailBirthYearLabel(charcterIndex)
          .getAttribute("innerText")
      )
      .to.eventually.contain("Birth year");

    await chai
      .expect(
        characterPage
          .personDetailBirthYear(charcterIndex)
          .getAttribute("innerText")
      )
      .to.eventually.contain(birthYear);

    await chai
      .expect(
        characterPage
          .personDetailEyeColorLabel(charcterIndex)
          .getAttribute("innerText")
      )
      .to.eventually.contain("Eye color");

    await chai
      .expect(
        characterPage
          .personDetailEyeColor(charcterIndex)
          .getAttribute("innerText")
      )
      .to.eventually.contain(eyeColor);

    await chai
      .expect(
        characterPage
          .personDetailSkinColorLabel(charcterIndex)
          .getAttribute("innerText")
      )
      .to.eventually.contain("Skin color");

    await chai
      .expect(
        characterPage
          .personDetailSkinColor(charcterIndex)
          .getAttribute("innerText")
      )
      .to.eventually.contain(skinColor);
  },

  verifyPlanetDetails: async function (
    planetIndex: number,
    name: string,
    population: string,
    climate: string,
    gravity: String
  ) {
    await chai
      .expect(planetsPage.planetName(planetIndex).getAttribute("innerText"))
      .to.eventually.contain(name);

    await chai
      .expect(
        planetsPage.planetPopulation(planetIndex).getAttribute("innerText")
      )
      .to.eventually.contain(population);

    await chai
      .expect(planetsPage.planetClimate(planetIndex).getAttribute("innerText"))
      .to.eventually.contain(climate);

    await chai
      .expect(planetsPage.planetGravity(planetIndex).getAttribute("innerText"))
      .to.eventually.contain(gravity);
  },

  verifyPlanetSearchTable: async function (charcterIndex: number) {
    await chai
      .expect(
        planetsPage
          .planetPopulationLabel(charcterIndex)
          .getAttribute("innerText")
      )
      .to.eventually.contain("Population:");

    await chai
      .expect(
        planetsPage.planetClimateLabel(charcterIndex).getAttribute("innerText")
      )
      .to.eventually.contain("Climate:");

    await chai
      .expect(
        planetsPage.planetGravityLabel(charcterIndex).getAttribute("innerText")
      )
      .to.eventually.contain("Gravity:");
  },
};
