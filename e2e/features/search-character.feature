Feature: Search for a Star Wars character

Background: Application is launched in a browser
    Given I navigate to "localhost"
    
    Scenario Outline: When a character is searched by full name
        When I search for <name>
        Then I see Lukes details
        Examples:
            |name          |
            |Luke Skywalker| 

    Scenario Outline: When a character is searchedy by first name
        When I search for <name>
        Then I see Lukes details
        And I see 1 results
         Examples:
            |name|
            |Luke| 

     Scenario Outline: When a character is searched by last name
        When I search for <name>
        Then I see 3 results
        And I see details of Luke Skywalker, Anakin Skywalker and Shmi Skywalker
        Examples:
            |name     |
            |Skywalker|

    Scenario Outline: When a character is searched by partial first name
        When I search for <name>
        Then I see details of Luke Skywalker and Luminara Unduli
        Examples:
            |name  |
            |Lu    |

    Scenario Outline: When a character is searched by invalid name
        When I search for <name>
        Then I should see no results
        Examples:
            |name  |
            |@&#*  |