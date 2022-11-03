Feature:
    As a user
    I want to login to the application 
    So that i can access to the home page

Background: 
    Given the user has navigated to the login page

Scenario: Login with valid credential   
    When  the user enters valid "samiksha@gmail.com" and "samiksha"
    Then  the home page should be displayed on the webUI

Scenario Outline: Login with invalid email format
    When the user enters email address as "<invalidemail>" and "<password>"
    Then the error "<message>" should pop
    Examples:
        |invalidemail|password| message                                  |
        |abc.com     |abc     |@ is missing                              |
        |abc@.com    |hello   |. is used at a wrong position in a .com   |
        |abc@gmail   |hyyy    |                                          |

Scenario: Login with valid credential   
    When  the user logins with following valid credential
    |email                   |password|
    |samikshapaudel@gmail.com|hello222|
    |abc@gmail.com           |hellohello|

    Then  the home page should be displayed on the webUI

