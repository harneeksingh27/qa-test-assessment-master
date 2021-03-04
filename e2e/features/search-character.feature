Feature: Search for a Star Wars character

Background: Application is launched in a browser
    Given I navigate to "localhost"
    
    Scenario: When a character is searched by full name
        When I search for Luke Skywalker
        Then I see Lukes details 

    Scenario: When a character is searchedy by first name
        When I search for Luke
        Then I see Lukes details
        And I see 1 results

     Scenario: When a character is searched by last name
        When I search for Skywalker
        Then I see 3 results
        And I see details of Luke Skywalker, Anakin Skywalker and Shmi Skywalker

    Scenario: When a character is searched by partial first name
        When I search for Lu
        Then I see details of Luke Skywalker and Luminara Unduli

    Scenario: When a character is searched by invalid name
        When I search for @&#*
        Then I should see no results
    
    Scenario: When a search query is removed and search is performed again
        When I search for Luke Skywalker
        And I delete search query and search again
        Then Search results should be remove