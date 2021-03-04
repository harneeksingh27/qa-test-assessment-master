 Feature: Search for a planet

    Background: Application is launched in a browser
    Given I navigate to "localhost"
    
    Scenario: Search a planet by full name
        When I click on planet option
        And I search for Hoth
        Then I see hoth's details

    Scenario Outline: Search planet by invalid name
        When I click on planet option
        When I search for <invalidName>
        Then I should see no results
        Examples:
            |invalidName |
            |^#$@        | 
            |hth         |
            |123         |