Feature: Search for a Star Wars character and switch to search planets with same query
    Background: Application is launched in a browser
        Given I navigate to "localhost"
        When  I search for Luke Skywalker
        Then I see Lukes details

    Scenario: I click on planet to search planet with same search query
        When I click on planet and click search button
        Then I should see no results