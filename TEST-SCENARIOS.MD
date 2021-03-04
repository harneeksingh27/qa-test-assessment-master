
# The Star Wars Application  

### Test Scenarios



>****Scenario 1 - Search a valid character by full name****  
***Given*** The application in launched  
***When*** I search for for full name  
***Then*** I should see details of character     


>***Scenario 2 - Verify character details***  
***Given*** I have searched for character  
***When*** I the results are displayed  
***Then*** I should see 
Gender  
Birth Year  
Eye Color  
Skin Color


>***Scenario 3 - Search a valid character by first name***  
***Given*** The application in launched  
***When*** I search for for first name  
***Then*** I should see details of characters  



>***Scenario 4 - Search a valid character by Last name***  
***Given*** The application in launched  
***When*** I search for for last name  
***Then*** I should see details of characters  



>***Scenario 5 - Search for more than one results***
***Given*** The application in launched  
***When*** I search for for partial string like Lu  
***Then*** I should see details of more than one characters  


>***Scenario 6 - Delete search content***  
***Given*** I have searched existing character or planet  
***When*** I delete the search query  
***And*** Click on search button  
***Then*** I should see empty results  


>***Scenario 7 - Switch search from character to planet***  
***Given*** I have searched for character name “Luke Skywalker”  
***And*** I should see details of “Luke Skywalker”  
***When*** I click on planet and click search  
***Then*** I should not see any results  



>***Scenario 8 - Search for a non existent character***  
***Given*** The application in launched  
***When*** I search for an non existent planet name  
***Then*** I should see Not Found  


  
>***Scenario 9 - Search a valid planet by name***  
***Given*** The application in launched  
***When*** I search for planet  
***Then*** I should see details of planet  



>***Scenario 10 - Verify planet details***  
***Given*** I have searched for planet  
***When*** I the results are displayed  
***Then*** I should see  
population
Climate
Gravity 



>***Scenario 11 - Search for more than one results***  
***Given*** The application in launched  
***When*** I search for for partial string “Ho”  
***Then*** I should see details of more than one planets  



>***Scenario 12 - Switch search from character to planet***  
***Given*** I have searched for planet name “Hoth”  
***And*** I see details of “Hoth”  
***When*** I click on people and click search  
***Then*** I should not see any results  







