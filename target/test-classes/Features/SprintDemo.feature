Feature: To launch the browser and pass any URL

  Scenario Outline: To verify the login functionality by passing the invalid credentials
    Given User has to prepare all the prerequistie items
    When User has to enter the url in browser
    And User has to pass the invalid username "<username>" and password "<password>" in login page
    Then User has to click the login button and verify the outcomes of the test datas

    Examples: 
      | username      | password    |
      | abc@gmail.com | Abcd@123    |
      | def@gmail.com | Efgh@456    |
      | ghi@gmail.com | Ijkl@789    |
      | jkl@gmail.com | Mnop@101112 |